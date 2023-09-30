import "./App.css";

import { useRoutes } from "@solidjs/router";
import { getCurrent } from "@tauri-apps/api/window";
import { lazy, onMount } from "solid-js";

import { notify, notifyRoutes } from "./util/notify";

const App = () => {
    const current = getCurrent();

    onMount(async () => {
        // 主窗口监听
        if (current.label === "main") {
            await notify();
        }

        // 生产环境, 全局取消右键菜单;
        if (!import.meta.env.DEV) {
            document.oncontextmenu = (event) => {
                event.preventDefault();
            };
        }
    });

    const routes = [
        { path: "/", component: lazy(() => import("./page/Home")) },
        {
            path: "/tray",
            component: lazy(() => import("./util/tray/page/Tray")),
        },
        ...notifyRoutes(),
    ];

    const Routes = useRoutes(routes);

    return <Routes />;
};

export default App;
