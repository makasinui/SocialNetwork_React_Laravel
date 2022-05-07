import { useState, useEffect } from "react";
import axios from "axios";
import { IUser, Children } from "./Interfaces";

export const IsAdmin:React.FunctionComponent<Children> = ({ children }) => {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        axios.get<IUser>("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);

    if (user?.role === "admin") {
        return <>{children}</>;
    } else {
        return <div>Не администратор</div>;
    }
}
