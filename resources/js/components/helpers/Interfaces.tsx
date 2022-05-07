import React from 'react'

export interface IUser {
    id:number;
    name:string;
    role:string;
}

export interface Children {
    children?:React.ReactChild | React.ReactNode
}