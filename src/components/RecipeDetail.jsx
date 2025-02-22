// src/components/RecipeDetail.jsx
import React from "react";
import { useMatch } from "react-router-dom";

const RecipeDetail = () => {
    const match = useMatch("/recipe/:id"); // Extract the `id` parameter from the URL

    // Mock data for demonstration
    const recipes = [
        {
            id: 1,
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish.",
            ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
            instructions: "Cook spaghetti, mix eggs and cheese, combine with cooked bacon.",
            author: "Chef John",
        },
        {
            id: 2,
            title: "Chicken Tikka Masala",
            description: "A flavorful Indian curry.",
            ingredients: ["Chicken", "Yogurt", "Spices", "Tomato Sauce"],
            instructions: "Marinate chicken, grill, and simmer in tomato sauce.",
            author: "Chef Maria",
        },
    ];

    // Find the recipe with the matching ID
    const recipe = recipes.find((r) => r.id === parseInt(match?.params.id));

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;