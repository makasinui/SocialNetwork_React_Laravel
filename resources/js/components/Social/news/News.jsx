import "./news.scss";

import React, { useEffect, useState } from "react";

import axios from "axios";

import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {AddNews} from "./addnews/AddNews";

export const News = () => {
    const [news, setNews] = useState();
    const [userID, setUserID] = useState();
    const [likes, setLikes] = useState();

    useEffect(() => {
        getNews();
        localStorage.user?setUserID(JSON.parse(localStorage.user).id):
        axios.get("/api/current").then(({ data }) => {
            setUserID(data?.id)
            if(data!=='Unauthorized')
                localStorage.setItem('user', JSON.stringify(data))
        });
        getLikes();
    }, [userID]);

    function getNews() {
        axios.get("/api/news").then(({ data }) => {
            setNews(data.data.reverse());
        });
    }

    function handleClickAdd(text) {
        if(text) {
            axios.post('/api/news',{
                text:text,
                user_id:userID
            }).then(()=>{
                getNews();
            })
            .catch((e)=>{
                throw new Error(e)
            })
        }
    }

    function getLikes() {
        if (userID !== undefined) {
            axios.get("/api/users/" + userID).then(({ data }) => {
                setLikes(data.data.likes);
            });
        }
    }

    function handleClickDelete(id) {
        const items = [...news]
        const itemID = items.findIndex((item)=>item.id===id)
        delete items[itemID]

        setNews(items.filter(Boolean))

        axios
            .delete("/api/news/" + id)
            .then(() => {
                getNews()
            })
            .catch((e) => {
                throw new Error(e);
            });
    }

    function handleClickLike(news_id, user_id, isLike, likeId = 0) {
        if(!isLike) {
            const new_likes = [...likes]
            const last_index = [...likes].pop()

            new_likes.push({
                id:last_index?.id+1,
                user_id:user_id,
                news_id:news_id
            })

            setLikes(new_likes)

            axios.post('/api/likes/',{
                'news_id':news_id,
                'user_id':user_id
            }).then(getLikes())
        } else {
            const new_likes = [...likes]
            const like = new_likes.findIndex((like)=>like.id===likeId)
            delete new_likes[like]

            setLikes(new_likes.filter(Boolean))

            axios.delete(`/api/likes/${likeId}`).then(()=>{

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
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }

        const newDate = new Date(date).toLocaleString('ru', options);
        return newDate;
    }

    return (

        <div>
            <h1>Последняя активность</h1>
            <AddNews handleClickAdd={handleClickAdd}/>
            <div>
                {news && likes ? (
                    news.map((item) => (
                        <div key={item.id} className="news-item">
                            <div className="news-user">
                                <Avatar sx={{width: 40, height: 40}}>
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
                                        sx={{width: 20, height: 20}}
                                        onClick={() => handleClickDelete(item.id)}
                                        style={{cursor: "pointer"}}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <CircularProgress/>
                )}
            </div>
        </div>
    );
};
