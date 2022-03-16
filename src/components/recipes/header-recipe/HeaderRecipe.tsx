import React from "react";

type HeaderRecipe = {
    strMeal: string,
    strCategory: string,
    strArea: string,
    strTags: string,
    strMealThumb: string
}

export const HeaderRecipe: React.FC<HeaderRecipe> = (
    {
        strMealThumb,
        strCategory,
        strMeal,
        strTags,
        strArea
    }
) => {
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
        </div>
    )
}