import React from "react";
import "./main.scss";

import { AddNews } from "../news/addnews/AddNews";
import { News} from '../news/News'


export const Main = () => {
    return (
        <section className="social-main">
            <News />
        </section>
    );
}
