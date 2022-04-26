import { useState, useEffect } from "react";
export default function IsAuthorized({children}) {
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

export function getName() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    return user.name;
}