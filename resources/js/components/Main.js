import React from 'react';
import Header from './Header'
import Opportunities from './Opportunities';
import { Link } from 'react-router-dom';
import '../../sass/main.scss'

export default function Main() {
    return(
        <main>
            <Header />
            <section className="main-top">
            <section className="main-top-content">
                <Link className='main-top-button' to='index'>Начать</Link>
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