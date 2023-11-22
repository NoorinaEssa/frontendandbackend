const express = require("express");
const app = express();
const PORT = 8089;
const connectDb = require("./config/connectDb");
const Form = require("./models/form.model");
var bodyParser = require('body-parser');
var cors = require('cors')

connectDb();
app.use(cors("*"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/form", async (req, res) => {
    try {
        const payload = req.body;
        const form = await Form.create(payload);
        res.json({ message: "Form data displayed", form });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.use("/getForm", async(req,res)=>{
    try{
        const forms=await Form.find();
        res.json(forms)
    }
    catch(err){
        console.log(err);
    }
})

app.use("/getData",async(req,res)=>{
    try{
    const forms=await Form.find();
    res.json(forms)
    
    }
    catch(err){
        console.log(err);
    }
    })

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});