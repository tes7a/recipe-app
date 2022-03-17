import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return <div>
        <NavLink to={'/recipe'}>Recipes</NavLink>
        <NavLink to={'/favorite'}>Favorite</NavLink>
    </div>
}