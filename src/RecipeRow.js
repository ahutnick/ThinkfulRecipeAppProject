import React from "react";

function RecipeRow({recipe, index, deleteRecipe}) {
    const keyName = recipe.name.split(" ").join("");
    const key = "recipe-" + index
    return (
        <tr id={index} key={key}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} /></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button onClick={deleteRecipe} type="button" name="delete">Delete</button></td>
        </tr>
    );
}

export default RecipeRow;
