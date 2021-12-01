const express  = require('express');
const app = express();


app.get("/", (_,res)=>{

    res.status(200).json({message:"Hello"});

});



app.listen(4000);