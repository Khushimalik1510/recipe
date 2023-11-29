const express=require("express");

const router=express.Router();  


//import controller
const {createRecipe}=require("../controllers/createRecipe");
const {getRecipe, getRecipeByID}=require("../controllers/getRecipe");
const {updateRecipe}=require("../controllers/updateRecipe");
const {deleteRecipe}=require("../controllers/deleteRecipe");
const {login , signup}=require("../controllers/users");

//define api routes
router.post("/createRecipe", createRecipe);
router.get("/getRecipe", getRecipe);
router.get("/getRecipe/:id",getRecipeByID);
router.put("/updateRecipe/:id", updateRecipe);
router.delete("/deleteRecipe/:id", deleteRecipe);
router.post("/login", login);
router.post("/signup", signup);
router.get('/userRecipes/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const userRecipes = await Recipe.find({ createdBy: userId });
      res.json(userRecipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
module.exports=router;
