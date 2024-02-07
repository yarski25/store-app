import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserStore from "./store/UserStore.js";
import DeviceStore from "./store/DeviceStore.js";
import CartStore from "./store/CartStore.js";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
      cart: new CartStore(),
    }}
  >
    <App />
  </Context.Provider>
  // </React.StrictMode>
);
