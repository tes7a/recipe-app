import React, {useEffect, useState} from 'react';
import './App.css';
import {Recipes} from "./components/recipes/Recipes";
import {Favorites} from "./components/favorites/Favorites";
import {Header} from "./components/header/Header";
import {Recipe, recipeAPI} from "./api/recipeAPI";

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [favorite, setFavorite] = useState<any>([])

    useEffect(() => {
        recipeAPI.getRecipe()
            .then(res => {
                setRecipes(res.meals);
            })
    }, [])
    return (
        <div>
            <Header/>
            <Recipes
                setRecipes={setRecipes}
                recipes={recipes}
                favorite={favorite}
                setFavorite={setFavorite}
            />
            <Favorites
                favorite={favorite}
            />
        </div>
    );
}

export default App;
