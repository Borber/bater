import "../css/NotifyCloseAll.css";

import { emit } from "@tauri-apps/api/event";
import { getCurrent } from "@tauri-apps/api/window";
import { onMount } from "solid-js";

import { sleep } from "../../sleep";

const NotifyCloseAll = () => {
    const current = getCurrent();
    onMount(async () => {
        sleep(50).then(async () => {
            await current.show();
        });
    });
    return (
        <div
            class="notify-close-all"
            onClick={async () => {
                await emit("notify-close-all");
                await current.close();
            }}>
            全部隐藏
        </div>
    );
};

export default NotifyCloseAll;
