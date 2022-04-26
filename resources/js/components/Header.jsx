import "../../sass/header.scss";
import HeaderIsAuthorized from "./helpers/HeaderIsAuthorized";

export default function Header() {
    return (
        <header className="header-main">
            <a href="#" className="logo-img">
                <img src="/img/icon.png" alt="Logo" />
                <h1 className="logo-txt">CODEV</h1>
            </a>

            <nav className="navigation">
                <ul className="link-list">
                    <HeaderIsAuthorized />
                </ul>
            </nav>
        </header>
    );
}
