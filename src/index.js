import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {App} from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { BillContextProvider } from "./context/bill/BillContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <BillContextProvider>
          <App />
        </BillContextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

