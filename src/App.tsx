import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Main from "./components/Main.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Main />
        </Provider>
    </React.StrictMode>
);
