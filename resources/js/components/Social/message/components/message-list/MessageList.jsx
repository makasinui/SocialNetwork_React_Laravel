import Avatar from "@mui/material/Avatar";
import './message-list.scss'
import {GetUsers} from "../../../../helpers/GetUsers";

export function MessageList() {
    const users = GetUsers();

    return (
        <div className='message-friends'>
            {users?.map((user) => (<div className='friend' key={user.id}>
                <div className="friends__avatar">
                    <Avatar sx={{width: 40, height: 40}}>
                        {user.name.charAt(0)}
                    </Avatar>
                </div>
                <div className="friends__name">
                    {user.name}
                </div>
            </div>))}
        </div>)
}
