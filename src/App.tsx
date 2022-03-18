import React, {useEffect, useState} from 'react';
import {Recipe} from "./api/recipeAPI";
import {GetRecipe} from "./api/getRecipe";
import {Header} from './components/header/Header';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Recipes} from './components/recipes/Recipes';
import {Favorites} from './components/favorites/Favorites';
import {Modal} from "./components/modal/Modal";
import s from './app.module.css'

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
        <div className={s.main}>
            <Modal
                setFavorite={setFavorite}
                show={show}
                setShow={setShow}
            />
            <div>
                <Header/>
            </div>
            <div>
                <button onClick={onShowHandler}>Add Dish</button>
            </div>
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
                {/*<Route path="/404" element={<h1 style={{textAlign: "center"}}>404. Page not found</h1>}/>
                <Route path="*" element={<Navigate to='/404'/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;
