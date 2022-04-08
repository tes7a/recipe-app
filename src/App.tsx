import React, {useState} from 'react';
import {Header} from './components/header/Header';
import {Navigate, Route, Routes} from 'react-router-dom';
import s from './app.module.css';
import {RecipeComponent} from "./components/recipes/RecipeComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/home/Home";
import {ModalWindow} from "./components/modal/ModalWindow";
import {Favorites} from "./components/favorites/Favorites";
import {FavoriteContext} from "./utils/contextFavorite";
import {Recipe} from "./api/recipeAPI";


function App() {
    const [show, setShow] = useState(false);
    const [favorite, setFavorite] = useState<Recipe[]>([]);

    return (
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
            <div>
                <div>
                    <Header setShow={setShow}/>
                </div>
                <div className={s.main}>
                    <div>
                        <ModalWindow
                            show={show}
                            setShow={setShow}
                        />
                    </div>
                    <Routes>
                        <Route path={'/recipe-app'} element={<Home/>}/>
                        <Route path={'/recipe'} element={<RecipeComponent/>}/>
                        <Route path={'/favorite'} element={<Favorites/>}/>
                        <Route path="*" element={<Navigate to='/404'/>}/>
                        <Route path='/' element={<Navigate to='/recipe-app'/>}/>
                        <Route path="/404" element={<h1 style={{textAlign: "center"}}>404. Page not found</h1>}/>
                    </Routes>
                </div>
            </div>
        </FavoriteContext.Provider>
    );
}

export default App;
