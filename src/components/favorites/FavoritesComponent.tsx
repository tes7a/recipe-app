import React from "react";
import {Favorites} from "./Favorites";
import {ModalWindow} from "../modal/ModalWindow";
import {useFavorites} from "../../utils/useFavorites";
import {useShow} from "../../utils/useShow";
import {Recipe} from "../../api/recipeAPI";

export const FavoritesComponent = (favorite: Recipe[]) => {
        return(
        <div>
            <Favorites
                favorite={favorite}
            />
        </div>
    )}