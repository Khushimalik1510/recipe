const express=require("express");
const cors = require('cors');
const app=express();

const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
//load config from env
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body 
app.use(express.json());


//import routes for recipe API
const recipeRoutes=require("./routes/recepies");

//mount the api routes
app.use("/api/v1", recipeRoutes);


//start server
app.listen(PORT, ()=>{
    console.log(`Server started at port number ${PORT}`);
})


//connect to db
const dbConnect=require("./config/database");
dbConnect();


//default route
app.get("/", (req, res)=>{
    res.send(`<h1>This is home page</h1>`);
})