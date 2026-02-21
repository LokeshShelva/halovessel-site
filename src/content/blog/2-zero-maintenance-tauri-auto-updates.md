---
title: Zero Maintenance Tauri Auto Updates Using GitHub Releases
description: This is a quick look at how tauri updater can be setup without a server and just with github releases
pubDate: 'Feb 22 2026'
article: true
---

I was genuinely surprised to find out how easy it was to set up auto updates for a Tauri app I am building.\

I am creating a small app for myself called [QwikAsk](https://github.com/LokeshShelva/qwik-ask). I was surprised to see that there was not much information on how to set up the auto updater without having a dedicated server. Most approaches either relied on using a dedicated server or having a file in the repo or as a gist that had to be maintained manually. This is a quick guide on how I managed to do it without any manual maintenance.

## Setting up the Updater

The `Updater` is a Tauri plugin that makes it super easy to add app version updates. It does most of the heavy lifting. Implementing it was the easy part. Here are some code snippets. You can refer to the [Updater docs](https://v2.tauri.app/plugin/updater/) for more details. After adding the updater plugin to my project, the first step was to create commands that we can call from the JS frontend.

```rs
// Check for available updates.
///
/// Queries the configured update endpoint to check if a newer version is available.
///
/// # Arguments
///
/// * `app` - The Tauri AppHandle
///
/// # Returns
///
/// * `UpdateCheckResult` - The result of the update check
#[tauri::command]
pub async fn check_for_updates(app: tauri::AppHandle) -> UpdateCheckResult {
    let updater = match app.updater() {
        Ok(updater) => updater,
        Err(e) => {
            return UpdateCheckResult::Error(format!("Failed to initialize updater: {}", e));
        }
    };

    match updater.check().await {
        Ok(Some(update)) => UpdateCheckResult::Available(UpdateInfo {
            version: update.version.clone(),
        }),
        Ok(None) => UpdateCheckResult::UpToDate,
        Err(e) => UpdateCheckResult::Error(format!("Failed to check for updates: {}", e)),
    }
}

/// Download and install an available update.
///
/// Downloads the update package and installs it. The application will need to
/// be restarted to apply the update.
///
/// # Arguments
///
/// * `app` - The Tauri AppHandle
///
/// # Returns
///
/// * `Ok(())` - Update installed successfully
/// * `Err(String)` - Error message if the update failed
///
/// # Events
///
/// Emits progress events during download:
/// - `update-download-progress` - Progress percentage (0-100)
/// - `update-download-finished` - Download completed
/// - `update-install-started` - Installation started
#[tauri::command]
pub async fn download_and_install_update(app: tauri::AppHandle) -> Result<(), String> {
    let updater = app
        .updater()
        .map_err(|e| format!("Failed to initialize updater: {}", e))?;

    let update = updater
        .check()
        .await
        .map_err(|e| format!("Failed to check for updates: {}", e))?
        .ok_or_else(|| "No update available".to_string())?;

    let app_handle = app.clone();

    // Download with progress tracking
    let mut downloaded: u64 = 0;
    let mut last_percentage: u8 = 0;

    update
        .download_and_install(
            |chunk_length, content_length| {
                downloaded += chunk_length as u64;
                if let Some(total) = content_length {
                    let percentage = ((downloaded as f64 / total as f64) * 100.0) as u8;
                    // Only emit when percentage changes to avoid flooding
                    if percentage != last_percentage {
                        last_percentage = percentage;
                        let _ = app_handle.emit("update-download-progress", percentage);
                    }
                }
            },
            || {
                let _ = app_handle.emit("update-download-finished", ());
            },
        )
        .await
        .map_err(|e| format!("Failed to download and install update: {}", e))?;

    let _ = app.emit("update-install-started", ());

    Ok(())
}
````

## Setting up the Frontend

Using these commands on the frontend, I implemented a quick way to check for updates and install them. I also implemented an automatic check every time the app opens and every 5 minutes while the app is running.

```js
/**
  * Check for available updates.
  *
  * Updates the status and updateInfo based on the result.
  */
async function checkForUpdates() {
  status.value = 'checking'
  errorMessage.value = null
  updateInfo.value = null
  lastCheckTimestamp = Date.now()

  try {
    const result = await invoke<UpdateCheckResult>('check_for_updates')

    switch (result.status) {
      case 'Available':
        status.value = 'available'
        updateInfo.value = result.data
        break
      case 'UpToDate':
        status.value = 'up-to-date'
        break
      case 'Error':
        status.value = 'error'
        errorMessage.value = result.data
        break
    }
  } catch (e) {
    status.value = 'error'
    errorMessage.value = e instanceof Error ? e.message : String(e)
  }
}

/**
  * Download and install the available update.
  *
  * Tracks progress via events and updates status accordingly.
  */
async function installUpdate() {
  if (status.value !== 'available') {
    return
  }

  status.value = 'downloading'
  downloadProgress.value = 0
  errorMessage.value = null

  try {
    await invoke('download_and_install_update')
    status.value = 'ready-to-restart'
  } catch (e) {
    status.value = 'error'
    errorMessage.value = e instanceof Error ? e.message : String(e)
  }
}
```

## The Magic (Not Really)

The next step was to configure the `updater` to specify where to look for the latest app versions. This can be done similarly to how it is explained in the documentation. I had to add a few details to `tauri.conf.json`:

```json
"plugins": {
  "updater": {
    "pubkey": "...",
    "endpoints": [
      "https://github.com/<user-name>/<repo-name>/releases/latest/download/latest.json" // This is important
    ],
    "windows": {
      "installMode": "passive"
    }
  }
}
```

Here I have configured the updater to look at the latest release page of the project repo. This is where the magic happens. I am using GitHub Actions to build and create releases for the application. In the same action, I also create the `latest.json` file and include it as part of the release along with the other artifacts. This JSON file will always contain the details of the latest release automatically and does not require any manual maintenance.

Before that, I had to sign the release of the Tauri app. That required creating a key pair and using it when building the application in the GitHub Action. I used `tauri-apps/tauri-action@v0` for this, and it provides an easy way to build the `latest.json` file while building the application. Here is the [documentation](https://github.com/tauri-apps/tauri-action/tree/v0.6.1?tab=readme-ov-file#build-options) for version `v0` of the action.

```yaml
- name: Build Tauri app
  uses: tauri-apps/tauri-action@v0
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    TAURI_SIGNING_PRIVATE_KEY: ${{ secrets.TAURI_SIGNING_PRIVATE_KEY }}
    TAURI_SIGNING_PRIVATE_KEY_PASSWORD: ${{ secrets.TAURI_SIGNING_PRIVATE_KEY_PASSWORD }}
  with:
    tagName: ${{ github.ref_name }}
    releaseName: "Qwik Ask v${{ needs.create-release.outputs.app_version }}"
    releaseBody: "${{ needs.create-release.outputs.changelog }}"
    releaseDraft: true
    prerelease: false
    args: --target ${{ matrix.target }}
    includeUpdaterJson: true # Options to create and add the latest.json file to the release
    updaterJsonPreferNsis: true
```

And that's it. Every time a new release is created, the `latest.json` file is also created, and the updater uses that JSON file to check for and install any new version available. No manual maintenance is required, and no dedicated server is required. If you want to look at the whole code and understand how everything fits together, you can check out my project [here](https://github.com/LokeshShelva/qwik-ask).

