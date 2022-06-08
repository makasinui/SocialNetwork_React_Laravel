import React from "react";
import ReactDOM from "react-dom";
import {Main} from "./Main";
import {SocialIndex} from "./social/SocialIndex";
import AdminIndex from "./admin/AdminIndex";
import {IsAdmin} from "./helpers/IsAdmin";
import {CheckAuthorized} from "./helpers/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="admin"
                    element={
                        <IsAdmin>
                            <AdminIndex />
                        </IsAdmin>
                    }
                />
                <Route
                path="index/*"
                element={
                    <CheckAuthorized>
                        <SocialIndex />
                    </CheckAuthorized>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("home")) {
    ReactDOM.render(<App />, document.getElementById("home"));
}
