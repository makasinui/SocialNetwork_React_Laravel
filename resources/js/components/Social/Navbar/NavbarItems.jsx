import React from "react";

import { Link } from "react-router-dom";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export const items = [
    {id:1,icon:<HomeOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Новости', url:'/index'},
    {id:2,icon:<AccountCircleOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Профиль', url:'/profile'},
    {id:3,icon:<EmailOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Сообщения', url:'/msg'},
    {id:4,icon:<GroupOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Друзья', url:'/friends'},
    {id:5,icon:<SettingsOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Настройки', url:'/settings'},
    {id:6,icon:<SettingsOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Что я блять накодил?', url:'/settings'},
];

export const NavbarItems = ()=> {
    
    return(
        <div>
            {items.map(item =>    
                <Link to={item.url} key={item.id}>
                    <li className="nav-item">
                        {item.icon}
                        <span className="nav-text">{item.text}</span>
                    </li>
                </Link>
            )}
        </div>
    );
}