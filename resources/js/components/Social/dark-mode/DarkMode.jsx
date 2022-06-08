import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useEffect, useState} from 'react'

export const DarkMode = () => {
    const [mode, setMode] = useState(()=>{
        const current_theme = localStorage.getItem('theme');
        return current_theme || 'white'
    });

    useEffect(()=>{
        changeTheme(mode)
    },[])

    function changeTheme(theme) {
        const nav = document.querySelector('.navbar-nav');
        const nav_items = document.querySelector('.nav-items');

        const header = document.querySelector('.social-header');
        const header_items = document.querySelector('.social-user');

        const black = '#223543';
        const black_items = '#ffcc40';

        const white = '#ffcc40';
        const white_items = '#B1415E';

        if(theme === 'black') {
            nav.style.background = black
            header.style.background = black
            nav_items.style.color = black_items
            header_items.style.color = black_items
        }
        if(theme === 'white') {
            nav.style.background = white
            header.style.background = white
            nav_items.style.color = white_items
            header_items.style.color = white_items
        }

        if(theme) {
            localStorage.setItem('theme',theme)
            console.log(theme)
            setMode(theme)
        }

    }

    function handleClick() {
        const current_theme = mode;
        const new_theme = current_theme === 'white' ? 'black' : 'white'

        changeTheme(new_theme)
    }

    return (
        <div>
            <DarkModeIcon onClick={handleClick}/>
        </div>
    );
}
