import React from "react";
import {NavLink} from "react-router-dom";
import s from './header.module.css';

export const Header = () => {
    return <div className={s.header}>
        <span>
            <NavLink to={'/recipe'}>Recipes</NavLink>
        </span>
        <span>
            <NavLink to={'/favorite'}>Favorite</NavLink>
        </span>
    </div>
}