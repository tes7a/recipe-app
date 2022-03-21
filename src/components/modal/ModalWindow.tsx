import React, {ChangeEvent, useEffect, useState, useRef, useContext} from "react";
import {favoriteRecipe} from "../../utils/favorite-local-sotrage";
import {NewRecipe} from "../recipes/newRecipe/newRecipe";
import {useOnClickOutside} from "../../utils/useOnClickOutside";
import {Form, FormGroup, Modal} from "react-bootstrap";
import s from './modal.module.css'
import Button from "react-bootstrap/esm/Button";
import {FavoriteContext} from "../../utils/contextFavorite";

type ModalWindow = {
    show: boolean,
    setShow: (value: boolean) => void,
}

export const ModalWindow: React.FC<ModalWindow> = ({
                                           show,
                                           setShow,
                                       }) => {
    const [title, setTitle] = useState('')
    const [instruction,setInstruction] = useState('')
    const [ingredient,setIngredient] = useState('')

    const {setFavorite} = useContext(FavoriteContext);

    const onAddDishHandler = () => {
        setFavorite(favoriteRecipe(NewRecipe(title, instruction, ingredient)));
        setShow(false);
        setTitle('');
        setInstruction('');
    }

    const onCloseOutside = () => {
        setShow(false)
        setTitle('');
        setInstruction('');
    }
    const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)}
    const instructionHandler = (e: ChangeEvent<HTMLInputElement>) => {setInstruction(e.currentTarget.value)}
    const ingredientHandler = (e: ChangeEvent<HTMLInputElement>) => {setIngredient(e.currentTarget.value)}
    const ref: any = useRef();
    useOnClickOutside(ref, onCloseOutside);

    useEffect(() => {
        let res = JSON.parse(localStorage.getItem('favourites') as string);
        if (res) {
            setFavorite(res);
        }
    }, [])

    return (
        <Modal show={show}>
            <Modal.Header closeButton={show}>
                <Modal.Title>Add You Custom Dish</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {show &&
                <div ref={ref}>
                    <Form>
                        <FormGroup controlId={'titleDish'}>
                            <Form.Label>Name Dish</Form.Label>
                            <Form.Control placeholder={"Name"} onChange={titleHandler}/>
                        </FormGroup>
                        <FormGroup controlId={'ingrDish'}>
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control
                                as="textarea"
                                className={s.inputIngr}
                                type={'text'}
                                placeholder={"Ingredients"}
                                onChange={ingredientHandler}
                                aria-autocomplete={'none'}
                            />
                        </FormGroup>
                        <FormGroup controlId={'instrDish'}>
                            <Form.Label>Instruction</Form.Label>
                            <Form.Control
                                as="textarea"
                                className={s.inputInstr}
                                placeholder={"Instruction"}
                                onChange={instructionHandler}/>
                        </FormGroup>
                    </Form>
                    <Modal.Footer className={s.btnModal}>
                        <Button variant="outline-dark" onClick={onAddDishHandler}>Add Recipe</Button>
                    </Modal.Footer>
                </div>}
            </Modal.Body>
        </Modal>
    )
}