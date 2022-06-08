import "./addnews.scss";

import React, {useRef, useState } from "react";

import Avatar from "@mui/material/Avatar";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CodeIcon from '@mui/icons-material/Code';

import { getName } from "../../../helpers/User";


export const AddNews = (handleClickAdd) => {
    const [text, setText] = useState("");
    const input = useRef('');

    function inputText(text) {
        handleClickAdd.handleClickAdd(text);
        setText('');
        input.current.value='';
    }

    return (
        <div className="main-input">
            <Avatar sx={{ width: 32, height: 32 }}>{getName()?.charAt(0)}</Avatar>
            <input
                className="main__input"
                onChange={(e) => setText(e.target.value)}
                ref={input}
                placeholder="Что у вас нового?"
            />
            <div className='icons'>
                <CodeIcon
                    className="main__send"
                    fontSize="medium"
                />
                <SendRoundedIcon
                    className="main__send"
                    onClick={() => {
                        inputText(text)
                    }}
                    fontSize="medium"
                />
            </div>

        </div>
    );
};
