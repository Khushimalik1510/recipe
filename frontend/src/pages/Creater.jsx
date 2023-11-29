import React, { useState } from 'react';
import axios from 'axios';

const Creater = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [createdBy, setCreatedBy]=useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/createRecipe", {
        title, ingredients, instructions, imageUrl, cookingTime, createdBy
      });
      alert("Recipe created");
      setTitle('');
      setIngredients('');
      setInstructions('');
      setImageUrl('');
      setCookingTime('');
      setCreatedBy('');
    } catch (err) {
      console.error(err);
      alert("Submission Failed. Try Again Later");
    }
    
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0', overflowY: 'hidden', paddingTop: '50px', paddingBottom: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '500px' }}>
        <div style={{ width: '740px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
          <form onSubmit={handleSubmit}> 
            <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#047857' }}>Create a New Recipe</h2>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="ingredients">Ingredients:</label>
              <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
              ></textarea>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="instructions">Instructions:</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
              ></textarea>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="cookingTime">Cooking Time:</label>
              <input
                type="text"
                id="cookingTime"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
            <label htmlFor="createdBy">Created By :</label>
              <input
              type="text"
              id="createdBy"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
              />

              </div>
            <div>
              <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#047857', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Creater;
