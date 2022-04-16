import React from 'react';
import Header from './Header'
import Opportunities from './Opportunities';
import '../../sass/main.scss'
export default function Main() {
    return(
        <main>
            <Header />
            <section className="main-top">
            <section className="main-top-content">
                <a href="" className="main-top-button">Начать</a>
                <div className="main-top-txt">Начинающая соц.сеть!</div>
            </section>
            </section>
            <section className="main-center">
            </section>
            <section className="center">
            </section>

            <section className="main-bottom">
            </section>
            <Opportunities />
        </main>
    );
    
}