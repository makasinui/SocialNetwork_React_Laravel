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

    useEffect(() => {
        mount();
        axios.get("/api/current").then(({ data }) => {
            setUserID(data?.id)
        });
        getLikes();
    }, [userID]);

    function mount() {
        axios.get("/api/news").then(({ data }) => {
            setNews(data);
        });
    }

    function getLikes() {    
        if (userID !== undefined) {
            axios.get("/api/users/" + userID).then(({ data }) => {
                setLikes(data.data.likes);
            });
        }
    }

    function handleClickDelete(id) {
        axios
            .delete("/api/news/" + id)
            .then(() => {
                mount()
            })
            .catch((e) => {
                throw new Error(e);
            });
    }

    function handleClickLike(news_id, user_id, isLike, likeId = 0) {
        if(!isLike) {
            axios.post('/api/likes/',{
                'news_id':news_id,
                'user_id':user_id
            })
            .then(()=>{
                getLikes()
            })
        } else {
            axios.delete(`/api/likes/${likeId}`).then(()=>{
                getLikes()
            })
        }
    }

    function isLiked(id) {
        const like = likes.find((like)=>like.news_id === id)

        if(!!like) {
            return(<FavoriteIcon
                sx={{ width: 20, height: 20 }}
                onClick={() =>
                    handleClickLike(id, userID, 1, like.id)
                }
            />)
        } else {
            return(
                <FavoriteBorderIcon
                    className="action__like"
                    sx={{ width: 20, height: 20 }}
                    onClick={() =>
                        handleClickLike(id, userID, 0)
                    }
                />
            )
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
                            {isLiked(item.id)}
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
