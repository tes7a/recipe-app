import React from "react";
import {Recipe} from "../../../api/recipeAPI";
import {getIngredients} from "./get-ingredients";
import {Card} from "react-bootstrap";
import s from "./ingredients.module.css";

type Ingredients = {
    recipe: Recipe
}

export const Ingredients: React.FC<Ingredients> = ({recipe}) => {
    const {
        strInstructions,
        strMeal,
        strCategory,
        strArea,
        strTags,
        strMealThumb
    } = recipe

    let ingredients = getIngredients(recipe);

    return (
        <Card className={s.mainCard}>
            <Card.Body className={s.card}>
                <Card.Title className={s.title}>
                    Name of the dish: {strMeal}
                </Card.Title>
                <div className={s.containerImg}>
                    <div>
                        <Card.Img variant="top" src={strMealThumb} className={s.img}/>
                        <h5>Category: {strCategory}</h5>
                        <h6>Country: {strArea}</h6>
                        <div>Tags: {strTags}</div>
                    </div>
                    <div className={s.tableWrapper}>
                        {ingredients && (
                            <table className={s.ingrTable}>
                                <thead>
                                <tr>
                                    <th>
                                        Ingredients:
                                    </th>
                                </tr>
                                </thead>
                                <tbody className={s.tbody}>
                                {ingredients.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.ingredient} </td>
                                        <td>{item.measure}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
                <h3>Instruction</h3>
                <Card.Footer>{strInstructions}</Card.Footer>
            </Card.Body>
        </Card>
    )
}