import "./navbar.scss";

export default function Navbar() {
    return (
        <section className="navbar-section">
            <nav className="navbar-nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Новости</span>
                    </li>
                    <li className="nav-item">
                        <i
                            className="fa fa-user-circle-o fa-lg"
                            aria-hidden="true"
                        ></i>
                        <span className="nav-text">Профиль</span>
                    </li>
                    <li className="nav-item">
                        <i
                            className="fa fa-comments-o fa-lg"
                            aria-hidden="true"
                        ></i>
                        <span className="nav-text">Сообщения</span>
                    </li>

                    <li className="nav-item">
                        <i className="fa fa-users fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Друзья</span>
                    </li>
                    <li className="nav-item">
                        <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Настройки</span>
                    </li>
                    <li className="nav-item">
                        <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Что я блять накодил?</span>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
