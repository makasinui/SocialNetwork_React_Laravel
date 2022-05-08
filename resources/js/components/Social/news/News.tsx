import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { INews } from "../../helpers/GetNews";
import "./news.scss";

export interface NewsItems {
    news: INews[];
}

export const News: React.FunctionComponent = () => {
    const [news, setNews] = useState<INews>();
    useEffect(() => {
        axios.get<INews>("/api/news").then(({ data }) => {
            setNews(data);
        });
    }, []);

    function GetDate(date: any) {
        let newDate = new Date(date).toLocaleDateString();
        
        return newDate;
    }

    return (
        <div>
            {news?.data
                ? news.data.map((item: any) => (
                      <Fragment key={item.id}>
                          <div className="news-user">
                            <Avatar sx={{ width: 40, height: 40 }}>{item.user.name.charAt(0)}</Avatar>
                            <div className="user-info">
                              <div>{item.user.name}</div>
                              {GetDate(item.created_at)}
                            </div>
                          </div>
                          <div className="user-text">{item.text}</div>
                      </Fragment>
                  ))
                : ""}
        </div>
    );
};
