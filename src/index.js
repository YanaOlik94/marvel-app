import ReactDom from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
import React from "react";


ReactDom
    .createRoot(document.getElementById("root"))
    .render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>

    )

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
 