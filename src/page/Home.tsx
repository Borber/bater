import "../css/Home.css";

import { emit } from "@tauri-apps/api/event";
import { getCurrent } from "@tauri-apps/api/window";
import { onMount } from "solid-js";

import { vibrancy } from "../common";
import Control from "../components/Control";
import TopBar from "../components/TopBar";
import { AboutIcon, FuturesIcon, SettingIcon } from "../icon";

const Home = () => {
    const main = getCurrent();

    main.listen("tauri://close-requested", async () => {
        await main.hide();
    });

    const setupWindow = async () => {
        const appWindow = (await import("@tauri-apps/api/window")).appWindow;
        appWindow.show();
    };

    onMount(async () => {
        // 避免窗口闪烁, 等待500ms再显示主窗口
        setTimeout(() => {
            setupWindow();
        }, 500);
    });

    return (
        <div
            data-tauri-drag-region
            class="container"
            classList={{ compromise: !vibrancy() }}>
            <Control maximize={false} />
            <TopBar />
            <div data-tauri-drag-region class="content">
                <img
                    data-tauri-drag-region
                    class="no-drag"
                    src="bater.png"
                    width={"150px"}
                    alt="bater"
                />
                <div class="button-group">
                    <button>
                        <FuturesIcon size={40} />
                    </button>
                    <button>
                        <SettingIcon size={40} />
                    </button>
                    <button
                        onClick={async () => {
                            await testNotify();
                        }}>
                        <AboutIcon size={40} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const testNotify = async () => {
    await emit("notify", {
        title: "这是一个示例通知",
        content: Math.random() + "",
        icon: "icon",
    });
};

export default Home;
