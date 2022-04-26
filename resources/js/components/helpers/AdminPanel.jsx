import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";

export default function AdminPanel() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);
    
    if (user.role === "admin") {
        return (
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Админ панель
                
            </MenuItem>
        );
    } else {
        return <></>;
    }
}
