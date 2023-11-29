//import 
const recipe=require("../models/recipe");

//define route handler
exports.createRecipe=async(req, res)=>{
    try{
        //extract title description and all
        const {title, ingredients, instructions, imageUrl , cookingTime, createdBy}=req.body;
        //create new object and insert in db
        const response=await recipe.create({title, ingredients, instructions, imageUrl , cookingTime,createdBy});
        //send a json response with success flag
        res.status(200).json({
            sucess:true,
            data:response,
            message:'Recepie created Successfully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            sucess:false,
            data:"internal server error",
            message:err.message,
        })
    }
}