import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.css'


const list = [
    {
        name:"start",
        path: "/",
        exact: true,

    },
    {
        name:"Dodaj zadanie",
        path:"/add",
        exact: true,
    },
    {
        name:"2023",
        path: "/next-year",
        exact: true,
    },
    {
        name:"O mnie",
        path: "/about-me",
        exact: true,
    },
]


export const Navigation = ()=>{
    const menu = list.map(item=><li className="Navigation__item" key={item.name}><NavLink  to={item.path}>{item.name}</NavLink></li>)


    return(
        <nav className="Navigation">
            {menu}
        </nav>

    )
}