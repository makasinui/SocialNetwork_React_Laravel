import React, { useEffect, useState } from "react";
import axios from "axios";

export interface INews {
    id?:number;
    text: string;
    data:any;
    user: object;
    news:any;
}



