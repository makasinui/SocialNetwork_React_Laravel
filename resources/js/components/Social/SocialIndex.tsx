import React from "react";
import {Header} from "./header/Header";
import {Navbar} from "./navbar/Navbar";
import {Main} from "./main/Main";

export const SocialIndex:React.FunctionComponent = ()=> {
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
