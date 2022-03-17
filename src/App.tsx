import React, {useEffect, useState} from 'react';
import {Recipe} from "./api/recipeAPI";
import {GetRecipe} from "./api/getRecipe";
import { Header } from './components/header/Header';
import {Route, Routes } from 'react-router-dom';
import { Recipes } from './components/recipes/Recipes';
import { Favorites } from './components/favorites/Favorites';

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [favorite, setFavorite] = useState<Recipe[]>([])

    useEffect(() => {
        GetRecipe(setRecipes);
    }, [])

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/recipe'} element={
                    <Recipes
                        setRecipes={setRecipes}
                        recipes={recipes}
                        favorite={favorite}
                        setFavorite={setFavorite}
                    />
                }/>
                <Route path={'/favorite'} element={
                    <Favorites
                        favorite={favorite}
                    />
                }/>
            </Routes>
        </div>
    );
}

export default App;
