import React from "react";
import "./main.scss";

import { AddNews } from "../news/addnews/AddNews";
import { News} from '../news/News'


export const Main:React.FunctionComponent = () => {
    return (
        <section className="social-main">
            <h1>Последняя активность</h1>
            <AddNews />
            <div className="news">
                <News />
            </div>

        </section>
    );
}
