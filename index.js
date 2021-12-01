const express  = require('express');
const app = express();

require("./helper/firebase")
const modelKaryawan = require('./model/karyawan');

app.post("/api/karyawan/add", express.json(),  async (req, res)=>{

    const {email, name, jabatan} = req.body;

    const resRegister = await modelKaryawan.registerKaryawan(email, name, jabatan);

    if(resRegister === true){
        res.status(200).json({message:"Berhasil menambahkan karyawan"})
        return
    }

    res.status(500).json({message:"Gagal menambahkan karyawan"})    

});

app.get("/", (_,res)=>{
    res.status(200).json({message:"Hello"});
});


app.listen(4000);