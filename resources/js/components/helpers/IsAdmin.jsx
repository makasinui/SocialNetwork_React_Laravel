import { useState, useEffect } from "react";
import axios from "axios";

export const IsAdmin = ({ children }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    if (user?.role === "admin") {
        return <>{children}</>;
    } else {
        return <div>Не администратор</div>;
    }
}
