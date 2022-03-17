import React, {useEffect, useState} from 'react';
import {Recipe} from "./api/recipeAPI";
import {GetRecipe} from "./api/getRecipe";
import { Header } from './components/header/Header';
import {Route, Routes } from 'react-router-dom';
import { Recipes } from './components/recipes/Recipes';
import { Favorites } from './components/favorites/Favorites';
import {Modal} from "./components/modal/Modal";

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [favorite, setFavorite] = useState<Recipe[]>([])
    const [show, setShow] = useState(false)

    const onShowHandler = () => {
        setShow(true)
    }

    useEffect(() => {
        GetRecipe(setRecipes);
    }, [])

    return (
        <div>
            <Modal
                setFavorite={setFavorite}
                show={show}
                setShow={setShow}
            />
            <button onClick={onShowHandler}>Add Dish</button>
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
