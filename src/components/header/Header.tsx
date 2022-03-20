import React from "react";
import {Link} from "react-router-dom";
import s from './header.module.css';

export const Header = () => {
    return <div>
        <nav className={s.header}>
            <Link to={'/recipe'}>Recipes</Link>
            <Link to={'/favorite'}>Favorite</Link>
        </nav>
    </div>
}