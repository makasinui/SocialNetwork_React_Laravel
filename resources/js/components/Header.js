import { useState } from 'react';
import '../../sass/header.scss'
import { checkUser } from './Main';

function IsAuthorized(){
    const user = checkUser();
    if(user === 'Unauthorized'){
        return(
            <>
                <a href='./login'>
                    <li className="link">Войти</li>
                </a>
                <a href='./register'>
                    <li className="link">Зарегистрироваться</li>
                </a>
                
            </>
        )
    } else {
        return(
            
            <>
                <div>
                    <a  href="./logout"
                        onClick={(e)=>{e.preventDefault();document.getElementById('logout-form').submit()}}>
                        <li className='link'>Выйти</li>
                    </a>
                </div>
                
            </>
        )
    }
}
export default function Header() {
    
    /* const user = (checkUser().then(resp=>{return resp}))
     */
    return(
        <header className='header-main'>
                <a href="#" className="logo-img">
                    <img src="/img/icon.png" alt="Logo" />
                    <h1 className="logo-txt">CODEV</h1>
                </a>
                
                <nav className="navigation">
                    <ul className="link-list">
                        <li className="link">Главная</li>
                        <li className="link">Контакты</li>
                        <li className="link">Помощь</li>
                        <IsAuthorized />
                    
                    </ul>
                </nav>
                
        </header>
    );
}