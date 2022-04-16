import { useState, useEffect } from "react";
import "../../sass/header.scss";
import { Link } from "react-router-dom";

function IsAuthorized() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    if (user === "Unauthorized") {
        return (
            <>
                <a href="./login">
                    <li className="link">Войти</li>
                </a>
                <a href="./register">
                    <li className="link">Зарегистрироваться</li>
                </a>
            </>
        );
    } else {
        if (user.role === "admin") {
            return (
                <>
                   
                    <div>
                        <li className="link">
                            <Link to="admin">Админ панель</Link>
                        </li>
                    </div>
                    <div>
                        <a
                            href="./logout"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("logout-form").submit();
                            }}
                        >
                            <li className="link">Выйти</li>
                        </a>
                    </div>
                </>
            );
        }
        return (
            <>
                <div>
                    <a
                        href="./logout"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("logout-form").submit();
                        }}
                    >
                        <li className="link">Выйти</li>
                    </a>
                </div>
            </>
        );
    }
}

export function IsAdmin({children}) {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("/api/current").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    if(user.role === 'admin') {
        return children
    }
    else {
        return(
            <div>Не администратор</div>
        )
    }
}

export default function Header() {
    /* const user = (checkUser().then(resp=>{return resp}))
     */
    return (
        <header className="header-main">
            <a href="#" className="logo-img">
                <img src="/img/icon.png" alt="Logo" />
                <h1 className="logo-txt">CODEV</h1>
            </a>

            <nav className="navigation">
                <ul className="link-list">
                    <li className="link">
                        <Link to="/">Главная</Link>
                    </li>
                    <li className="link">Контакты</li>
                    <li className="link">Помощь</li>
                    <IsAuthorized />
                </ul>
            </nav>
        </header>
    );
}
