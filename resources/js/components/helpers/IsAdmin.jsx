import { useState, useEffect } from "react";
import axios from "axios";

export const IsAdmin = ({ children }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        localStorage.user?setUser(JSON.parse(localStorage.user)):
        axios.get("/api/current").then(({data}) => {
            setUser(data);
            if(data!=='Unauthorized')
                localStorage.setItem('user', JSON.stringify(data))
        });
    }, []);

    if (user?.role === "admin") {
        return <>{children}</>;
    } else {
        return <div>Не администратор</div>;
    }
}
