import React, {createContext} from "react";
import {Recipe} from "../api/recipeAPI";

interface IContext {
    favorite: Recipe[]
    setFavorite: (value: Recipe[]) => void
}

export const FavoriteContext = createContext<IContext>({
    favorite: [],
    setFavorite: ()=> {}
});