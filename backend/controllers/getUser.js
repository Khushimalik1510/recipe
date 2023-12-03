const Recipe = require("../models/recipe");
const User = require("../models/user");

exports.getUserRecipes = async (req, res) => {
    try {
        // Extract the username from the request parameters
        const { name } = req.params;

        // Find the user by the username
        const user = await User.findOne({ uname: name });

        // If the user doesn't exist, return an error
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Find recipes associated with the user
        const userRecipes = await Recipe.find({ userOwner: user.email});

        return res.status(200).json({
            success: true,
            userRecipes,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server error",
        });
    }
};
