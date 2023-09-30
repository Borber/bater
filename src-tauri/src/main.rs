#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::Serialize;
use tauri::Manager;

mod setup;
mod tray;
mod util;
mod window;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Debug, Serialize, Clone)]
struct NotifyProps {
    title: String,
    content: String,
    icon: String,
}

#[tauri::command]
fn notify(handle: tauri::AppHandle) {
    handle
        .emit_all(
            "notify",
            NotifyProps {
                title: "title".to_string(),
                content: "content".to_string(),
                icon: "icon".to_string(),
            },
        )
        .unwrap();
}

#[tauri::command]
async fn vibrancy() -> bool {
    util::vibrancy()
}

fn main() {
    tauri::Builder::default()
        .system_tray(tray::new())
        .on_system_tray_event(tray::handler)
        .setup(setup::handler)
        .invoke_handler(tauri::generate_handler![greet, vibrancy, notify])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
