import React, {useCallback, useEffect} from "react";
import {GetRecipe} from "../../api/getRecipe";
import {Recipe} from "../../api/recipeAPI";
import {favoriteRecipe} from "../../utils/favorite-local-sotrage";
import {Ingredients} from "./ingredients/Ingredients";
import s from './recipe.module.css';
import Button from "react-bootstrap/esm/Button";

type Recipes = {
    recipes: Recipe[],
    setRecipes: (recipe: Recipe[]) => void,
    favorite: Recipe[],
    setFavorite: (recipe: Recipe[]) => void,
}

export const Recipes: React.FC<Recipes> = ({recipes, setRecipes, favorite, setFavorite}) => {

    const onSkipHandler = useCallback(() => {
        GetRecipe(setRecipes);
        window.scrollTo(0,0);
    }, [recipes])

    console.log(recipes)
    const onSaveHandler = useCallback(() => {
        setFavorite(favoriteRecipe(recipes[0]));
        GetRecipe(setRecipes);
    }, [recipes])

    useEffect(() => {
        let res = JSON.parse(localStorage.getItem('favourites') as string);
        if (res) {
            setFavorite(res);
        }
    }, [])

    return (
        <div>
            <div>
                <Ingredients recipe={recipes[0]}/>
                <div className={s.btn}>
                    <Button variant="outline-dark" className={s.btnSave} onClick={onSaveHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-save" viewBox="0 0 16 16">
                            <path
                                d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                        </svg>Save</Button>
                    <Button variant="outline-dark" onClick={onSkipHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></Button>
                </div>
            </div>
        </div>
    )
}