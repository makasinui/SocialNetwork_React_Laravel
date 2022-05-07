import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { IUser } from "./Interfaces";


export default function AdminPanel() {
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        axios.get<IUser>("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);
    
    if (user?.role === "admin") {
        return (
            <Link to="admin">
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Админ панель
                    
                </MenuItem>
            </Link>
        );
    } else {
        return <></>;
    }
}
