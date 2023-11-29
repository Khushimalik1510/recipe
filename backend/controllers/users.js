const bcrypt =require("bcrypt");
const jwt=require("jsonwebtoken");

//import the model
const User=require("../models/user");
require("dotenv").config();


//signup route handler
exports.signup=async(req, res)=>{
    try{
        //extract the user info
        const {name,email, password}=req.body;

        //if user already existes
        const existingUser=await User.findOne({email});

        if(existingUser){
            return res.status(200).json({
                success:false,
                message:'user already exists',
            });
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password, 10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"error in hashing password",
            })
        }


        
        //create the new object 
        const user=await User.create({name,email, password:hashedPassword});

        //send a json response with success flag
        return res.status(200).json({
            sucess:true,
            message:'user created',
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            sucess:false,
            data:"user cannot be registered please try again later",
        })
    }
}



//login handler
exports.login=async(req, res)=>{
    try{
        //data fetch
        const {email, password}=req.body;
        //validation on email and password agar data nahi pada hai toh
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"please fill all the details"
            });
        }

        //user available or not
        let user=await User.findOne({email});
        //if not a registered email
        if(!user) {
            return res.status(401).json({
                success:false,
                message:"User not registered"
            });
        }


        const payload={
            email:user.email,
            id:user._id,
        };
        //verify password and generate jwt token
        if(await bcrypt.compare(password, user.password)){
            //password match
            let token = jwt.sign(payload, process.env.JWT_SECRET,{
                expiresIn:"2h",
            });

            user.token=token;
            user.password=undefined;

            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token , 
                user, 
                message :"user logged in successfully",
            });
        }
        else{
            //password match nahi hua
            return res.status(403).json({
                success:false,
                message:"password incorrect"
            });
        }
    }
    catch(err){
        console.error(err);
        return res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"login failure",
        });
    }
}