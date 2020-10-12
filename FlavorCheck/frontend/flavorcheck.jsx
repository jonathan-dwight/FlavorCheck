import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./actions/session_actions"
import configureStore from "./store/store"


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<h3>WELCOME TO FLAVORCHECK</h3>, root);

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
})