import "../css/Notify.css";

import { emit, listen } from "@tauri-apps/api/event";
import {
    currentMonitor,
    getCurrent,
    PhysicalPosition,
    WebviewWindow,
} from "@tauri-apps/api/window";
import { createSignal, onMount } from "solid-js";

import { AboutIcon, Close } from "../../../icon";
import { sleep } from "../../sleep";

export interface NotifyProps {
    label?: string;
    title: string;
    content: string;
    icon: string;
}

const Notify = () => {
    const [info, Info] = createSignal<NotifyProps>();

    const current = getCurrent();
    const label = current.label;

    onMount(async () => {
        await move(current);

        await listen<NotifyProps>("notifying", async (p) => {
            if (p.payload.label === label) {
                Info(p.payload);
                sleep(50).then(async () => {
                    await current.show();
                });
            }
        });

        await listen<{ label: string }>("notify-up", async (p) => {
            if (p.payload.label === label) {
                await up(current);
            }
        });

        await listen<{ label: string }>("notify-down", async (p) => {
            if (p.payload.label === label) {
                await down(current);
            }
        });

        await emit("notify-ready", { label });
    });

    return (
        <div class="notify">
            <div
                class="notify-close"
                onClick={async () => {
                    await emit("notify-destroyed", { label });
                    await current.close();
                }}>
                <Close size={10} />
            </div>
            <div class="notify-icon">
                <AboutIcon size={60} />
            </div>
            <div class="notify-info">
                <div class="notify-title">{info()?.title}</div>
                <div class="notify-content">{info()?.content}</div>
            </div>
        </div>
    );
};

const move = async (window: WebviewWindow) => {
    const monitor = await currentMonitor();
    const outerSize = await window.outerSize();
    const x = monitor!.size.width - outerSize.width - 10;
    const y = monitor!.size.height - outerSize.height - 10;
    await window.setPosition(new PhysicalPosition(x, y));
};

const up = async (window: WebviewWindow) => {
    const pos = await window.outerPosition();
    const height = (await window.outerSize())?.height;
    pos!.y -= height + 10;
    await window.setPosition(pos as PhysicalPosition);
};

const down = async (window: WebviewWindow) => {
    const pos = await window.outerPosition();
    const height = (await window.outerSize())?.height;
    pos!.y += height + 10;
    await window.setPosition(pos as PhysicalPosition);
};

export default Notify;
