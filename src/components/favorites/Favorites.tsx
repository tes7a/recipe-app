import React from "react";
import { Recipe } from "../../api/recipeAPI";
import { Ingredients } from "../recipes/ingredients/Ingredients";

type Favorites = {
    favorite: Recipe[],
    setShow: (value: boolean) => void,
}

export const Favorites: React.FC<Favorites> = ({favorite, setShow}) => {

    const onShowHandler = () => {
        setShow(true)
    }

    return (<>
        <div>
            <button onClick={onShowHandler}>Add Dish</button>
        </div>
        <ul>
            {favorite.map(f =>
                <Ingredients key={f.idMeal} recipe={f}/>
            )}
        </ul>
    </>)
}