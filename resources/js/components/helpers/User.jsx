import React, { useState, useEffect } from "react";
import axios from 'axios'

export const CheckAuthorized = ({children}) => {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    if (typeof(user) === 'string') {
       return (
           <>
            {window.location.href='/login'}
           </>
       );
    } else {
        return <>{children}</>;
    }
}

export function getUser(id) {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("/api/users/"+id).then(({data}) => {
            setUser(data);
        });
    }, []);

    return user;
}

export function getUserId() {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    return user?.id;
}

export function getName() {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    return user?.name;
}

export function getRole() {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    return user?.role;
}