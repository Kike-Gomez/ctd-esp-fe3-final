import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./Context/Context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
