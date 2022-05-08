import React, { SyntheticEvent, useEffect, useState } from "react";
import "./addnews.scss";
import Avatar from "@mui/material/Avatar";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { getName } from "../../../helpers/User";

export const AddNews: React.FunctionComponent = () => {
    const [text, setText] = useState<String>("");
    
    function handleClick() {
        console.log('true')
    }

    return (
        <div className="main-input">
            <Avatar sx={{ width: 32, height: 32 }}>{getName()?.charAt(0)}</Avatar>
            <input
                type="text"
                className="main__input"
                onChange={(e) => setText(e.target.value)}
                placeholder="Что у вас нового?"
            />
            <SendRoundedIcon
                className="main__send"
                onClick={handleClick}
                fontSize="medium"
                color="disabled"
            />
        </div>
    );
};
