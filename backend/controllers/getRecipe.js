const Recipe=require("../models/recipe")

//define route handler
exports.getRecipe=async(req, res)=>{
    try{
        //fetch all to do items fro m database
        const recepies=await Recipe.find({});

        //response update
        res.status(200).json(recepies);
        // .json({
        //     success:true,
        //     data:recepies,
        //     message:"entire recepie data is fetched",
        // });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"server error",
        });
    }
}


exports.getRecipeByID=async(req, res)=>{
    try{
        //extract recipe by id
        const id=req.params.id;
        const recipe=await Recipe.findById({_id:id})

        //data for given id is not found
        if(!recipe){
            return res.status(404).json({
                success:false,
                message:"No data found with given ID",
            })
        }   
        //data found for given id
        res.status(200).json(recipe);
        // res.status(200).json({
        //     success:true,
        //     data:recipe,
        //     meassage:`Recipe ${id} data successfully fetched`,
        // })
    }
    catch(err){ 
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
            error:err.message,
            message:"server error",
        });
    }
}