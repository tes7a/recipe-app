import React, {useCallback, useEffect} from "react";
import {GetRecipe} from "../../api/getRecipe";
import {Recipe} from "../../api/recipeAPI";
import {favoriteRecipe} from "../../utils/favorite-local-sotrage";
import {Ingredients} from "./ingredients/Ingredients";
import s from './recipe.module.css';
import sContainer from '../../Styles/Container.module.css'
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
                <Button onClick={onSaveHandler}>Save</Button>
                <Button onClick={onSkipHandler}>Skip</Button>
            </div>
        </div>
    </div>
    )}