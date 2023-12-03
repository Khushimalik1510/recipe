import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ username }) => {
    const [userRecipes, setUserRecipes] = useState([]);

    useEffect(() => {
        const fetchUserRecipes = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/userRecipes/${username}`);
                setUserRecipes(response.data.userRecipes);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserRecipes();
    }, [username]);

    return (
        <div>
            <h2>{username}'s Recipes</h2>
            <ul>
                {userRecipes.map((recipe) => (
                    <li key={recipe._id}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
