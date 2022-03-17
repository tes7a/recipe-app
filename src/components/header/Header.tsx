import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "../modal/Modal";

export const Header = () => {
    const [show, setShow] = useState(false)

    const onShowHandler = () => {
        setShow(true)
    }

    return <div>
        <NavLink to={'/recipe'}>Recipes</NavLink>
        <NavLink to={'/favorite'}>Favorite</NavLink>
        <Modal
            show={show}
            setShow={setShow}
        />
        <button onClick={onShowHandler}>Add Dish</button>
    </div>
}