import {Recipe} from "../api/recipeAPI";

export const favoriteRecipe = (favRecipe: Recipe[]) => {
    try {
        let fav;
        if(localStorage.getItem('favorite') !== null) {
            fav = JSON.parse(localStorage.localStorage.getItem('favorite'))
        }
        if (!fav) {
            localStorage.setItem('favourites', JSON.stringify(favRecipe));
        } else if (favRecipe.find(item => item.idMeal === favRecipe.map(r => r.idMeal).toString())) {
            alert('This meal already in the favourites list');
        } else {
            fav.push(favRecipe);
            localStorage.setItem('favourites', JSON.stringify(fav));
        }
    }
    catch (err){
        console.log(err)
    }
}

// try {
//     const favourites = JSON.parse(localStorage.getItem('favourites'));
//
//     if (!favourites) {
//         localStorage.setItem('favourites', JSON.stringify([newRecipe]));
//     } else if (favourites.find(item => item.idMeal === newRecipe.idMeal)) {
//         alert('This meal already in the favourites list');
//     } else {
//         favourites.push(newRecipe);
//         localStorage.setItem('favourites', JSON.stringify(favourites));
//     }
// } catch (error) {
//     console.log(error);
// }