import React from "react";
import {Header} from "./header/Header";
import {Navbar} from "./navbar/Navbar";
import {Main} from "./main/Main";
import { Route, Routes } from "react-router";
import { ProfileIndex } from "./profile/ProfileIndex";
import {Message} from "./message/Message";
export const SocialIndex = ()=> {
    return (
        <React.Fragment>
            <Header />
            <main className="social-index">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                        path="profile"
                        element={
                            <ProfileIndex />
                        }
                    />
                    <Route
                        path="msg"
                        element={
                        <Message />
                    } />
                </Routes>
            </main>
        </React.Fragment>
    );
}
