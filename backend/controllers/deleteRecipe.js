//import the model
const Recipe=require("../models/recipe");


//define route handler
exports.deleteRecipe=async(req, res)=>{
    try{
       const {id}=req.params;

       await Recipe.findByIdAndDelete(id);
       res.json({
            success:true,
            message:"Recipe has been deleted",
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