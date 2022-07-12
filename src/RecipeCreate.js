import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialForm});

  const handleChange = ({ target }) => {
    setFormData({...formData, [target.name]: target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {name, cuisine, photo, ingredients, preparation} = formData;
    const recipe = {name, cuisine, photo, ingredients, preparation}
    addRecipe(recipe);
    setFormData({...initialForm});
  }
 


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine} 
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                placeholder="URL"
                type="url"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea 
                id="ingredients" 
                name="ingredients"
                placeholder="Ingredients"
                rows={2}
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea 
                id="preparation" 
                name="preparation"
                placeholder="Preparation"
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
