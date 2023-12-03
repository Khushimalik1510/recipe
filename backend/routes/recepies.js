const express=require("express");
const router=express.Router();  


//import controller
const {createRecipe}=require("../controllers/createRecipe");
const {getRecipe, getRecipeByID}=require("../controllers/getRecipe");
const {updateRecipe}=require("../controllers/updateRecipe");
const {deleteRecipe}=require("../controllers/deleteRecipe");
const {login , signup }=require("../controllers/users");
const {getUserRecipes}=require("../controllers/getUser");

//define api routes
router.post("/createRecipe", createRecipe);
router.get("/getRecipe", getRecipe);
router.get("/getRecipe/:id",getRecipeByID);
router.put("/updateRecipe/:id", updateRecipe);
router.delete("/deleteRecipe/:id", deleteRecipe);
router.post("/login", login);
router.post("/signup", signup);
router.get("/userRecipes/:username", getUserRecipes);
module.exports=router;
