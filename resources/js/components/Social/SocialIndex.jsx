import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
export default function SocialIndex() {
    return (
        <React.Fragment>
            <Header />
            <main className="container social-index">
                <Navbar />
                <Main />
            </main>
        </React.Fragment>
    );
}
