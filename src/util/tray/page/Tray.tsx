import "../css/Tray.css"

import { listen } from "@tauri-apps/api/event"
import { exit } from "@tauri-apps/api/process"
import {
    getCurrent,
    PhysicalPosition,
    WebviewWindow,
} from "@tauri-apps/api/window"

import { vibrancy } from "../../../common"
import { AboutIcon } from "../../../icon"

const Tray = () => {
    const tray = getCurrent()

    listen<{ x: number; y: number }>("tray", async (pos) => {
        await tray.setPosition(
            new PhysicalPosition(pos.payload.x, pos.payload.y)
        )
        await tray.show()
        await tray.setFocus()
    })

    return (
        <div
            class="tray"
            classList={{ compromise: !vibrancy() }}
            onMouseLeave={async () => {
                await tray.hide()
            }}>
            <div class="tray-item h-2">
                <AboutIcon size={40} />
            </div>

            <div
                class="tray-item"
                onClick={async () => {
                    await tray.hide()
                    const main = WebviewWindow.getByLabel("main")
                    if (await main?.isMinimized()) await main?.unminimize()
                    if (!(await main?.isVisible())) await main?.show()
                    await main?.setFocus()
                }}>
                显示
            </div>
            <div
                class="tray-item"
                onClick={async () => {
                    await exit(0)
                }}>
                退出
            </div>
        </div>
    )
}

export default Tray
