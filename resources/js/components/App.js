import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Index from "./Admin/Index";
import { IsAdmin } from "./Header";
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
                            <Index />
                        </IsAdmin>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("home")) {
    ReactDOM.render(<App />, document.getElementById("home"));
}
