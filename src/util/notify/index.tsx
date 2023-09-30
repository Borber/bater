import { emit, listen } from "@tauri-apps/api/event";
import { currentMonitor, WebviewWindow } from "@tauri-apps/api/window";
import { lazy } from "solid-js";

import { timestamp_string } from "../timestamp";
import { NotifyProps } from "./page/Notify";

export const notifyRoutes = () => {
    return [
        { path: "/notify", component: lazy(() => import("./page/Notify")) },
        {
            path: "/notify-close-all",
            component: lazy(() => import("./page/NotifyCloseAll")),
        },
    ];
};

export const notify = async () => {
    const notifys: NotifyProps[] = [];

    await listen<NotifyProps>("notify", async (p) => {
        const label = timestamp_string();
        const count = notifys.push({ label, ...p.payload });

        const index = count - 1;

        if (count <= 3) {
            await creatNotifyWindow(label);

            notifys.slice(0, index).forEach(async (n) => {
                console.log(n.label, "up");
                await emit("notify-up", { label: n.label });
            });
        }

        if (count === 3) {
            const monitor = await currentMonitor();
            const scaleFactor = monitor!.scaleFactor;

            const base = WebviewWindow.getByLabel(notifys[0].label!);
            const size = await base?.outerSize();

            const width = size!.width;
            const height = size!.height;

            const x = (monitor!.size.width - width - 10) / scaleFactor;
            const y =
                (monitor!.size.height -
                    (height + 10) * 3 -
                    40 * scaleFactor -
                    10) /
                scaleFactor;

            await creatNotifyCloseAllWindow(x, y);
        }
    });

    await listen<{ label: string }>("notify-ready", async (p) => {
        const label = p.payload.label;
        const info = notifys.find((n) => n.label === label);
        await emit("notifying", info);
    });

    await listen<{ label: string }>("notify-destroyed", async (p) => {
        const label = p.payload.label;
        const info = notifys.find((n) => n.label === label);
        const index = notifys.indexOf(info!);
        notifys.splice(index, 1);

        const count = notifys.length;

        // 如果 总体长度大于等于 3 触发新增逻辑
        // 大于当前位置, 小于等于 3 的, 都需要提高位置
        // 把第三个显示出来
        // 如果 总体长度小于 3, 触发下降逻辑
        // 小于当前位置, 大于等于 0 的, 都需要降低位置
        // close all窗口需要关闭
        if (count >= 3) {
            notifys.slice(index, 2).forEach(async (n) => {
                await emit("notify-up", { label: n.label });
            });
            await creatNotifyWindow(notifys[2].label!);
        } else {
            notifys.slice(0, index).forEach(async (n) => {
                await emit("notify-down", { label: n.label });
            });
            WebviewWindow.getByLabel("notify-close-all")?.close();
        }
    });

    await listen("notify-close-all", async () => {
        notifys.forEach(async (n) => {
            await emit("notify-destroyed", { label: n.label });
            await WebviewWindow.getByLabel(n.label!)?.close();
        });
    });
};

const creatNotifyWindow = async (label: string) => {
    new WebviewWindow(label, {
        url: "/notify",
        width: 320,
        height: 80,
        resizable: false,
        fullscreen: false,
        maximized: false,
        visible: false,
        decorations: false,
        transparent: false,
        alwaysOnTop: true,
        skipTaskbar: true,
    });
};

const creatNotifyCloseAllWindow = async (x: number, y: number) => {
    new WebviewWindow("notify-close-all", {
        url: "/notify-close-all",
        width: 320,
        height: 40,
        x,
        y,
        resizable: false,
        fullscreen: false,
        maximized: false,
        visible: false,
        decorations: false,
        transparent: false,
        alwaysOnTop: true,
        skipTaskbar: true,
    });
};
