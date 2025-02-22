// src/pages/Home.js
import React from "react";
import RecipeList from "../components/RecipeList";

const Home = () => {
    return (
        <div>
            <h1>Welcome to InstaRecipe</h1>
            <RecipeList />
        </div>
    );
};

export default Home;