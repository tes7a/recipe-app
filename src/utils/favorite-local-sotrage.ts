import {Recipe} from "../api/recipeAPI";

export const favoriteRecipe = (favRecipe: Recipe) => {
    const favourites: Recipe[] = JSON.parse(localStorage.getItem('favourites') as string);

    if (!favourites) {
        localStorage.setItem('favourites', JSON.stringify([favRecipe]));
    } else if (favourites.find(item => item.idMeal === favRecipe.idMeal)) {
        alert('This meal already in the favourites list');
    } else {
        favourites.push(favRecipe);
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }
    return favourites;
}