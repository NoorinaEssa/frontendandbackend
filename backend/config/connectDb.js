const  mongoose = require("mongoose");

const connectDb = async() =>{
   await  mongoose.connect("mongodb+srv://Noorina:Abc12345@cluster0.ggvk4fm.mongodb.net/test")
   console.log("Mongo Db connection successful");
}

module.exports=connectDb;