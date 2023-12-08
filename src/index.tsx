import React from "react";
import ReactDOMClient from "react-dom/client";
import { SocialMedia } from "./screens/SocialMedia";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SocialMedia />);
