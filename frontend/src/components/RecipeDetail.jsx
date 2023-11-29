import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/getRecipe/${id}`);
        setRecipe(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleShare = (recipeId) => {
    const recipeUrl = `${window.location.origin}/recipe/${recipeId}`;
    // Assuming you have a function to copy the URL to the clipboard
    // You can implement this function or use a library like `clipboard-copy`
    copyToClipboard(recipeUrl);
    alert(`Recipe URL copied to clipboard: ${recipeUrl}`);
  };

  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="container mx-auto p-6 text-center text-lg">
        <h1 className="text-6xl font-bold text-teal-600 mb-8">Recipe Detail</h1>
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <img className="w-full h-[450px] object-cover" src={recipe.imageUrl} alt={recipe.title} />
          <div className="p-4">
            <h2 className="text-4xl font-semibold text-teal-800 mb-2">{recipe.title}</h2>
            <p className="text-teal-600 mb-2">
              <span className='text-black font-semibold'>Ingredients: </span>
              {recipe.ingredients}
            </p>
            <p className="text-teal-600 mb-2">
              <span className='text-black font-semibold'>Instructions: </span>
              {recipe.instructions}
            </p>
            <p className="text-teal-600 mb-2">
              <span className='text-black font-semibold'>Cooking Time: </span>
              {recipe.cookingTime} minutes
            </p>
            <p className="text-teal-600 mb-2">
              <span className='text-black font-semibold'>Created At: </span>
              {recipe.createdAt}
            </p>
            <p className="text-teal-600 mb-2">
              <span className='text-black font-semibold'>Created By: </span>
              {recipe.createdBy}
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleShare(recipe._id)}
                className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 focus:outline-none"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;


