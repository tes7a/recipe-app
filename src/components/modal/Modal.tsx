import React, {ChangeEvent, useEffect, useState, useRef} from "react";
import {Recipe} from "../../api/recipeAPI";
import {favoriteRecipe} from "../../utils/favorite-local-sotrage";
import {NewRecipe} from "../recipes/newRecipe/newRecipe";
import {useOnClickOutside} from "../../utils/useOnClickOutside";

type Modal = {
    show: boolean,
    setShow: (value: boolean) => void,
    setFavorite: (recipe: Recipe[]) => void,
}

export const Modal: React.FC<Modal> = ({
                                           show,
                                           setShow,
                                           setFavorite
                                       }) => {
    const [title, setTitle] = useState('')
    const [instruction,setInstruction] = useState('')
    const [ingredient,setIngredient] = useState('')

    const onAddDishHandler = () => {
        setFavorite(favoriteRecipe(NewRecipe(title, instruction, ingredient)));
        setShow(false);
        setTitle('');
        setInstruction('');
    }
    const onClose = () => {
        setShow(false)
        setTitle('');
        setInstruction('');
    }
    const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)}
    const instructionHandler = (e: ChangeEvent<HTMLInputElement>) => {setInstruction(e.currentTarget.value)}
    const ingredientHandler = (e: ChangeEvent<HTMLInputElement>) => {setIngredient(e.currentTarget.value)}
    const ref: any = useRef();
    useOnClickOutside(ref, onClose);

    useEffect(() => {
        let res = JSON.parse(localStorage.getItem('favourites') as string);
        if (res) {
            setFavorite(res);
        }
    }, [])

    return (
        <div>
            {show &&
            <div>
                <div ref={ref}>
                    <input onChange={titleHandler}/>
                </div>
                <div>
                    <input onChange={ingredientHandler}/>
                </div>
                <div>
                    <input onChange={instructionHandler}/>
                </div>
                <button onClick={onAddDishHandler}>Add Recipe</button>
                <button onClick={onClose}>X</button>
            </div>
            }
        </div>
    )
}