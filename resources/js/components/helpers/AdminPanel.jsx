import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";



export default function AdminPanel() {
    const [user, setUser] = useState();
    useEffect(() => {
        localStorage.user?setUser(JSON.parse(localStorage.user)):
        axios.get("/api/current").then(({data}) => {
            setUser(data);
        });
    }, []);
    
    if (user?.role === 'admin') {
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
