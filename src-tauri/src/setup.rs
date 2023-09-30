use std::error::Error;

use tauri::{App, Manager};

use crate::window;

pub fn handler(app: &mut App) -> Result<(), Box<dyn Error>> {
    if cfg!(any(target_os = "macos", target_os = "windows")) {
        let window = app.get_window("main").unwrap();
        window::decor(&window);
        let window = app.get_window("tray").unwrap();
        window::decor(&window);
    };
    Ok(())
}
