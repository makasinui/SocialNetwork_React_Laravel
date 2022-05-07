import React from "react";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export interface NavbarItems {
    id:number;
    icon:any;
    text:string;
}

export const items:Array<NavbarItems> = [
    {id:1,icon:<HomeOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Новости'},
    {id:2,icon:<AccountCircleOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Профиль'},
    {id:3,icon:<EmailOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Сообщения'},
    {id:4,icon:<GroupOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Друзья'},
    {id:5,icon:<SettingsOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Настройки'},
    {id:6,icon:<SettingsOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Что я блять накодил?'},
];

export const NavbarItems:React.FunctionComponent = ()=> {
    
    return(
        <div>
            {items.map(item =>    
                <li className="nav-item" key={item.id}>
                    {item.icon}
                    <span className="nav-text">{item.text}</span>
                </li>
            )}
        </div>
    );
}