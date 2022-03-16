import React, {useCallback, useEffect, useState} from "react";
import {Recipe, recipeAPI} from "../../api/recipeAPI";
import {HeaderRecipe} from "./header-recipe/HeaderRecipe";
import {favoriteRecipe} from "../../utils/favorite-local-sotrage";

type Recipes = {
    recipes: Recipe[],
    setRecipes: (recipe: Recipe[]) => void,
    favorite: Recipe[],
    setFavorite: (favRec: Recipe[]) => void,
}

export const Recipes: React.FC<Recipes> = ({recipes, setRecipes, favorite, setFavorite}) => {

    const onSkipHandler = useCallback(() => {
        recipeAPI.getRecipe()
            .then(res => setRecipes(res.meals));
    }, [recipes])

    const onSaveHandler = useCallback(() => {
        favoriteRecipe(recipes);
        recipeAPI.getRecipe()
            .then(res => setRecipes(res.meals));
    }, [recipes])


    return <div>
        {recipes.map(r =>
            <HeaderRecipe
                key={r.idMeal}
                strArea={r.strArea}
                strCategory={r.strCategory}
                strMeal={r.strMeal}
                strMealThumb={r.strMealThumb}
                strTags={r.strTags}
            />
        )}
        <div>
            <table>
                <thead>
                <tr>
                    <td>Ingredient</td>
                    <td>Measure</td>
                </tr>
                </thead>
                <tbody>
                {recipes.map(r =>
                    <tr>
                        <td>{r.strIngredient1}</td>
                        <td>{r.strMeasure1}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        <div>
            <button onClick={onSaveHandler}>Save</button>
            <button onClick={onSkipHandler}>Skip</button>
        </div>
    </div>
}