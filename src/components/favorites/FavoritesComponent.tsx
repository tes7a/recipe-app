import React from "react";
import {Favorites} from "./Favorites";
import {ModalWindow} from "../modal/ModalWindow";
import {useFavorites} from "../../utils/useFavorites";
import {useShow} from "../../utils/useShow";

export const FavoritesComponent = () => {
    const {favorite, setFavorite} = useFavorites();
    const {show, setShow} = useShow();

        return(
        <div>
            <ModalWindow
                setFavorite={setFavorite}
                show={show}
                setShow={setShow}
            />
            <Favorites
                favorite={favorite}
                setShow={setShow}
            />
        </div>
    )}