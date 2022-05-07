import React, { useState, useEffect } from "react";
import axios from 'axios'
import { IUser, Children } from "./Interfaces";

export const CheckAuthorized:React.FunctionComponent<Children> = ({children}) => {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        axios.get<IUser>("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    if (user?.name === "Unauthorized") {
       return (
           <>
            {window.location.href='/login'}
           </>
       );
    } else {
        return <>{children}</>;
    }
}

export function getUser() {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        axios.get<IUser>("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    return user;
}

export function getName() {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        axios.get<IUser>("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    return user?.name;
}

export function getRole() {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        axios.get<IUser>("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    return user?.role;
}