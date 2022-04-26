import { useState, useEffect } from "react";
export default function CheckAuthorized({children}) {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    if (user === "Unauthorized") {
       return (
           <>
            {window.location.href='/login'}
           </>
       );
    } else {
        return children;
    }
}

export function getUser() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    return user;
}

export function getName() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    return user.name;
}

export function getRole() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    return user.role;
}