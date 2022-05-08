import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { INews } from "../../helpers/GetNews";
import "./news.scss";
import { getUserId } from "../../helpers/User";

export interface NewsItems {
    news: INews[];
}

export const News: React.FunctionComponent = () => {
    const [news, setNews] = useState<INews>();
    const userID = getUserId();
    useEffect(() => {
        axios.get<INews>("/api/news").then(({ data }) => {
            setNews(data);
        });
    }, []);

    function handleClick(id: any) {
        axios
            .delete("/api/news/" + id)
            .then(() => {
                alert("Успешно!");
                window.location.href="/index";
            })
            .catch((e) => {
                throw new Error(e);
            });
    }

    function GetDate(date: number) {
        let newDate = new Date(date).toLocaleDateString();

        return newDate;
    }

    return (
        <div>
            {news?.data
                ? news.data.map((item: any) => (
                      <div key={item.id} className="news-item">
                          <div className="news-user">
                              <Avatar sx={{ width: 40, height: 40 }}>
                                  {item.user.name.charAt(0)}
                              </Avatar>
                              <div className="user-info">
                                  <div>{item.user.name}</div>
                                  {GetDate(item.created_at)}
                              </div>
                          </div>
                          <div className="user-text">{item.text}</div>
                          <div className="user-actions">
                              <FavoriteBorderIcon
                                  className="action__like"
                                  sx={{ width: 20, height: 20 }}
                              />
                              {item.user.id === userID ? (
                                  <DeleteOutlineIcon
                                      sx={{ width: 20, height: 20 }}
                                      onClick={()=>handleClick(item.id)}
                                      style={{cursor:'pointer'}}
                                  />
                              ) : (
                                  ""
                              )}
                          </div>
                      </div>
                  ))
                : ""}
        </div>
    );
};
