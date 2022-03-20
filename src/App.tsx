import React from 'react';
import {Header} from './components/header/Header';
import {Navigate, Route, Routes} from 'react-router-dom';
import s from './app.module.css';
import {RecipeComponent} from "./components/recipes/RecipeComponent";
import {FavoritesComponent} from "./components/favorites/FavoritesComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/home/Home";
import {ModalWindow} from "./components/modal/ModalWindow";
import {useShow} from "./utils/useShow";
import {useFavorites} from "./utils/useFavorites";
import {Recipe} from './api/recipeAPI';
import {Favorites} from "./components/favorites/Favorites";


function App() {
    const {show, setShow} = useShow();
    const {favorite, setFavorite} = useFavorites();

    return (
        <div>
            <div>
                <Header setShow={setShow}/>
            </div>
            <div className={s.main}>
                <div>
                    <ModalWindow
                        setFavorite={setFavorite}
                        show={show}
                        setShow={setShow}
                    />
                </div>
                <Routes>
                    <Route path={'/recipe-app'} element={<Home/>}/>
                    <Route path={'/recipe'} element={<RecipeComponent/>}/>
                    <Route path={'/favorite'} element={<Favorites favorite={favorite}/>}/>
                    <Route path="*" element={<Navigate to='/404'/>}/>
                    <Route path='/' element={<Navigate to='/recipe-app'/>}/>
                    <Route path="/404" element={<h1 style={{textAlign: "center"}}>404. Page not found</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
