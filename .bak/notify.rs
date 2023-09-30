#[tauri::command]
async fn notify(width: f64, height: f64, handle: tauri::AppHandle) {
    let window = tauri::WindowBuilder::new(&handle, "external", tauri::WindowUrl::App("/".into()))
        .decorations(false)
        .resizable(false)
        .inner_size(width, height)
        .always_on_top(true)
        .skip_taskbar(true)
        .visible(false)
        .build()
        .unwrap();

    let outer_size = window.outer_size().unwrap();
    let monitor = window.current_monitor().unwrap().unwrap();

    let pos = PhysicalPosition {
        x: monitor.size().width - outer_size.width - 10,
        y: monitor.size().height - outer_size.height - 10,
    };

    window.set_position(pos).unwrap();

    if cfg!(any(target_os = "macos", target_os = "windows")) {
        set_shadow(&window, true).expect("Unknow error in the macos or windows platform");
    };
}