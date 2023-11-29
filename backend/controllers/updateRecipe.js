//import 
const Recipe=require("../models/recipe");

//define route handler
exports.updateRecipe=async(req, res)=>{
    try{
       const {id}=req.params ;
       //fetch data from body
       const {title, ingredients, instructions, imageUrl , cookingTime, createdBy}=req.body;

       const recipe= await Recipe.findByIdAndUpdate(
        id,
        {title, ingredients, instructions, imageUrl , cookingTime, createdBy},
       )

       res.status(200).json({
        success:true,
        data:recipe,
        message:`Recipe ${id} data successfully updated`,
    })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        });
    }
}