import "./news.scss";

import React, { Fragment, useEffect, useRef, useState } from "react";

import axios from "axios";

import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const News = () => {
    const [news, setNews] = useState();
    const [userID, setUserID] = useState();
    const [likes, setLikes] = useState();
    const noLike = useRef(null);
    const like = useRef(null);

    useEffect(() => {
        axios.get("/api/news").then(({ data }) => {
            setNews(data);
        });
        axios.get("/api/current").then(({ data }) => {
            setUserID(data?.id);
            if (userID !== undefined) {
                axios.get("/api/users/" + userID).then(({ data }) => {
                    setLikes(data.data.likes);
                });
            }
        });
    }, [userID]);

    function handleClickDelete(id) {
        axios
            .delete("/api/news/" + id)
            .then(() => {
                alert("Успешно!");
                window.location.href = "/index";
            })
            .catch((e) => {
                throw new Error(e);
            });
    }

    function handleClickLike(news_id, user_id, isLike) {
        
        console.log(news_id, user_id);

        if(!isLike) {
            axios.post('/api/likes/',{
                'news_id':news_id,
                'user_id':user_id
            })

            noLike.style.background = 'black'

        }
    }

    function GetDate(date) {
        let newDate = new Date(date).toLocaleDateString();
        return newDate;
    }

    return (
        <div>
            {news?.data && likes ? (
                news.data.map((item,i) => (
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
                            {likes[i]?.news_id !== item.id ? (
                                <FavoriteBorderIcon
                                    className="action__like"
                                    sx={{ width: 20, height: 20 }}
                                    onClick={() =>
                                        handleClickLike(item.id, userID, 0)
                                    }
                                    ref={noLike}
                                />
                            ) : (
                                <FavoriteIcon
                                    sx={{ width: 20, height: 20 }}
                                    onClick={() =>
                                        handleClickLike(item.id, userID, 1)
                                    }
                                    ref={like}
                                />
                            )}
                            {item.user.id === userID ? (
                                <DeleteOutlineIcon
                                    sx={{ width: 20, height: 20 }}
                                    onClick={() => handleClickDelete(item.id)}
                                    style={{ cursor: "pointer" }}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};
