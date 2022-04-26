import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuItem from "@mui/material/MenuItem";
export default function NavbarItems() {
    const items = [
        {id:1,icon:<HomeOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Новости'},
        {id:2,icon:<AccountCircleOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Профиль'},
        {id:3,icon:<EmailOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Сообщения'},
        {id:4,icon:<GroupOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Друзья'},
        {id:5,icon:<SettingsOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Настройки'},
        {id:6,icon:<SettingsOutlinedIcon fontSize="medium" className='navbar__icon' />,text:'Что я блять накодил?'},
    ];
    
    return(
        items.map(item=>{
            return(
                <li className="nav-item" key={item.id}>
                    {item.icon}
                    <span className="nav-text">{item.text}</span>
                </li>
            );
        })
    );
}