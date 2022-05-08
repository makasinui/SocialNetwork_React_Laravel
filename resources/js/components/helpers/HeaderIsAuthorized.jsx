
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function HeaderIsAuthorized() {

    const [user, setUser] = useState();

    useEffect(() => {
        axios.get("/api/current")
        .then(({data}) => {
            setUser(data);
        });
    }, []);

    if (typeof(user) === 'string') {
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
        if (user?.role === "admin") {
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