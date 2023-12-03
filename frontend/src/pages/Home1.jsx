import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/v1/getRecipe");
                setRecipes(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRecipes();
    }, []);

    const handleFilter = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleShare = (recipeId) => {
        const recipeUrl = `${window.location.origin}/recipe/${recipeId}`;
        copyToClipboard(recipeUrl);
        alert(`Recipe URL copied to clipboard: ${recipeUrl}`);
    };

    const copyToClipboard = (text) => {
        const textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        textField.remove();
    };

    // Filter recipes based on searchQuery
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="overflow-hidden">
                 <img className="w-full h-[870px]" src="https://thumbs.dreamstime.com/z/chef-hotel-restaurant-kitchen-cooking-hands-prepared-beef-steak-vegetable-decoration-81415061.jpg?w=992" alt="" />
             </div>
             <div className="container mx-auto p-6 text-center text-lg">
            <div className="mb-4 flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Search recipes"
                    value={searchQuery}
                    onChange={handleFilter}
                    style={{
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '0.25rem',
                    }}
                />
            </div>

            <h1 className="text-6xl font-bold text-teal-600 mb-8">Recipes</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map((recipe) => (
                    <li key={recipe._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <Link to={`/recipe/${recipe._id}`}>
                            <img className="w-full h-48 object-cover" src={recipe.imageUrl} alt={recipe.title} />
                        </Link>
                        <div className="p-4">
                            <Link to={`/recipe/${recipe._id}`}>
                                <h2 className="text-2xl font-semibold text-teal-800 mb-2">{recipe.title}</h2>
                            </Link>
                            <p className="text-teal-600 mb-2">
                                <span className='text-black font-semibold'>Ingredients: </span>
                                {recipe.ingredients}
                            </p>

<p className="text-teal-600 mb-2">
    <span className='text-black font-semibold'>Instructions: </span>
    {typeof recipe.instructions === 'string' && recipe.instructions.length > 5
        ? recipe.instructions.slice(0, 5)
        : recipe.instructions}
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
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}

export default Home;
