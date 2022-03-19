import React from 'react';
import Header from './Header'
import Opportunities from './Opportunities';
import '../../sass/main.scss'
import axios from 'axios';
export default function Main() {
    axios.get('/api/current')
    .then(resp=>{
        console.log(resp)
    })
    return(
        <main>
            <Header />
            <section className="main-top">
            <section className="main-top-content">
                <a href="#code" className="main-top-button">Начать</a>
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