import "./navbar.scss";

export default function Navbar() {
    return (
        <section className="navbar-section">
            <nav class="navbar-nav">
                <ul class="nav-items">
                    <li className="nav-item">
                        <i class="fa fa-home fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Новости</span>
                    </li>
                    <li className="nav-item">
                        <i
                            class="fa fa-user-circle-o fa-lg"
                            aria-hidden="true"
                        ></i>
                        <span className="nav-text">Профиль</span>
                    </li>
                    <li className="nav-item">
                        <i
                            class="fa fa-comments-o fa-lg"
                            aria-hidden="true"
                        ></i>
                        <span className="nav-text">Сообщения</span>
                    </li>

                    <li className="nav-item">
                        <i class="fa fa-users fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Друзья</span>
                    </li>
                    <li className="nav-item">
                        <i class="fa fa-cog fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Настройки</span>
                    </li>
                    <li className="nav-item">
                        <i class="fa fa-cog fa-lg" aria-hidden="true"></i>
                        <span className="nav-text">Что я блять накодил?</span>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
