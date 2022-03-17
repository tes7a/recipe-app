import React from "react";
import { Recipe } from "../../../api/recipeAPI";
import {getIngredients} from "./get-ingredients";

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
        <div>
            <h1>
                Name of the dish: {strMeal}
            </h1>
            <h5>Category: {strCategory}</h5>
            <h6>Country: {strArea}</h6>
            <div>Tags: {strTags}</div>
            <div>
                <img style={{height: "100px", width: "100px"}} src={strMealThumb}/>
            </div>
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
            <h3>Instruction</h3>
            <p>{strInstructions}</p>
        </div>
    )
}