const mongoose=require("mongoose");

const recipeSchema= new mongoose.Schema(
    {
        title:{
            type:String ,
            required:true,
        },
        ingredients:[{type:String , required:true}],
        instructions:[{type:String , required:true}],
        imageUrl:{type:String , required:true},
        cookingTime:{type:String , required:true},
        createdAt:{type:Date, required:true, default:Date.now()},
        createdBy:{  type:String ,
            required:true}
    }
);

module.exports=mongoose.model("Recipe", recipeSchema);