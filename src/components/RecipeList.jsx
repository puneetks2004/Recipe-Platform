// src/components/RecipeList.js
import React from "react";
import { recipes } from "../mockData";

const RecipeList = () => {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                    <button>View Recipe</button>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;