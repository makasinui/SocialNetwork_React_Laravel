import axios from 'axios'
import {useEffect, useState} from "react";

export const GetUsers = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axios.get('/api/users').then(({data}) => {
            setUsers(data.data)
        })
    }, [])

    return users;
}
