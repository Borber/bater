/// 检测是否能应用半透明效果
pub fn vibrancy() -> bool {
    #[cfg(target_os = "macos")]
    {
        true
    }

    #[cfg(target_os = "windows")]
    {
        let info = os_info::get();
        let info = info.edition().unwrap_or("unknown");
        info.contains("Windows 11")
    }

    #[cfg(not(any(target_os = "macos", target_os = "windows")))]
    {
        false
    }
}
