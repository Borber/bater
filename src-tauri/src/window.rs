use crate::util;

/// 增加窗口装饰
///
/// 依赖于 `window_shadows` 和 `window_vibrancy`
pub fn decor(window: &tauri::Window) {
    if cfg!(any(target_os = "macos", target_os = "windows")) {
        match window_shadows::set_shadow(window, true) {
            Ok(_) => {}
            Err(e) => {
                println!("Error setting shadow: {}", e);
            }
        }
    };

    #[cfg(target_os = "macos")]
    window_vibrancy::apply_vibrancy(window, NSVisualEffectMaterial::HudWindow, None, None)
        .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

    #[cfg(target_os = "windows")]
    {
        if util::vibrancy() {
            window_vibrancy::apply_mica(window, None)
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
        }
    }
}
