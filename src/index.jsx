import React from "react";
import ReactDOMClient from "react-dom/client";
import { AddRoutinePopUp } from "./screens/AddRoutinePopUp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AddRoutinePopUp />);
