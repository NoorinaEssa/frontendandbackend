const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
        require: true
    },
    email: {
        type: String,
         default: "",
        
    },
    password: {
        type: String,
        default: "",
        require: true
    },
     gender:{
        type:String,
        default:""
    },
     age:{
        type:String,
        default:""
    }

}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);
