import React from "react";
import {Favorites} from "./Favorites";
import {Modal} from "../modal/Modal";
import {useFavorites} from "../../utils/useFavorites";
import {useShow} from "../../utils/useShow";

export const FavoritesComponent = () => {
    const {favorite, setFavorite} = useFavorites();
    const {show, setShow} = useShow();

        return(
        <div>
            <Modal
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