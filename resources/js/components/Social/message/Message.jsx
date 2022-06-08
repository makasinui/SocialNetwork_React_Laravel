import './message.scss'

import {MessageInput} from "./components/message-input/MessageInput";
import {MessageList} from "./components/message-list/MessageList";

export const Message = () => {
    return (
        <div className="message-container">
            <div className="fiends-list">
                <MessageList/>
            </div>

            <div className="area">
                <div className="message-area">

                </div>
                <MessageInput/>
            </div>
        </div>
    )
}
