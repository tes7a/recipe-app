import React from 'react';
import {Header} from './components/header/Header';
import {Navigate, Route, Routes} from 'react-router-dom';
import s from './app.module.css';
import {RecipeComponent} from "./components/recipes/RecipeComponent";
import {FavoritesComponent} from "./components/favorites/FavoritesComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/home/Home";

function App() {
    return (
        <div className={s.main}>
            <div>
                <Header/>
            </div>
            <Routes>
                <Route path={'/recipe-app'} element={<Home/>}/>
                <Route path={'/recipe'} element={<RecipeComponent/>}/>
                <Route path={'/favorite'} element={<FavoritesComponent/>}/>
                <Route path="*" element={<Navigate to='/404'/>}/>
                <Route path='/' element={<Navigate to='/recipe-app'/>}/>
                <Route path="/404" element={<h1 style={{textAlign: "center"}}>404. Page not found</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
