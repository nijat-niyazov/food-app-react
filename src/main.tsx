import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProvidersTree from "./providers/index.tsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
);
