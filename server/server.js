const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',(req,res)=>{
    res.send("Server ka data aa gya");
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.json({
        username:req.body.username,
        password:req.body.password
    })
});

app.post("/signup",(req,res) => {
    console.log(req.body);
    res.json({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        mobile : req.body.mobile,
        dob:req.body.dob
    })
});

app.listen("4000",()=>{
    console.log("success");
});