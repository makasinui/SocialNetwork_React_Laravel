import '../../sass/header.scss'
export default function Header() {
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
                        <a href="./login">
                            <li className="link">Авторизация</li>
                        </a>
                        <a href="./register">
                            <li className="link">Регистрация</li>
                        </a>
                        {/* <li className="link">Выход</li> */}
                    </ul>
                </nav>
                
        </header>
    );
}