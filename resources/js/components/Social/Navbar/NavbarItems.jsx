import React from "react";

import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const items = [
    {
        id: 1,
        icon: <HomeOutlinedIcon fontSize="medium" className="navbar__icon" />,
        text: "Новости",
        url: "/index",
    },
    {
        id: 2,
        icon: <EmailOutlinedIcon fontSize="medium" className="navbar__icon" />,
        text: "Сообщения",
        url: "/index/msg",
    },
    {
        id: 3,
        icon: <GroupOutlinedIcon fontSize="medium" className="navbar__icon" />,
        text: "Друзья",
        url: "/index/friends",
    },
    {
        id: 4,
        icon: (
            <SettingsOutlinedIcon fontSize="medium" className="navbar__icon" />
        ),
        text: "Настройки",
        url: "/index/settings",
    },
    {
        id: 5,
        icon: (
            <SettingsOutlinedIcon fontSize="medium" className="navbar__icon" />
        ),
        text: "Что я блять накодил?",
        url: "/index/settings",
    },

];

export const NavbarItems = () => {
    return (
        <div>
            {items.map((item) => (
                <Link to={item.url} key={item.id}>
                    <li className="nav-item">
                        <span className="nav-text">{item.text}</span>
                        {item.icon}
                    </li>
                </Link>
            ))}
        </div>
    );
};
