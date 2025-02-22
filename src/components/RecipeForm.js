// src/components/RecipeForm.js
import React, { useState } from "react";

const RecipeForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Recipe Submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <textarea
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea
                placeholder="Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RecipeForm;