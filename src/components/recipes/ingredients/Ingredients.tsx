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
        <Card className={s.card}>
            <div>
                <Card.Img variant="top" src={strMealThumb} className={s.img}/>
            </div>
            <Card.Body>
                <Card.Title>
                    Name of the dish: {strMeal}
                </Card.Title>
                <h5>Category: {strCategory}</h5>
                <h6>Country: {strArea}</h6>
                <div>Tags: {strTags}</div>
                <Card.Text>
                    {ingredients && (
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    Ingredients:
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {ingredients.map(item => (
                                <tr key={item.id}>
                                    <td>{item.ingredient} </td>
                                    <td>{item.measure}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </Card.Text>
                <h3>Instruction</h3>
                <Card.Footer>{strInstructions}</Card.Footer>
            </Card.Body>

        </Card>
    )
}