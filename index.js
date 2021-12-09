const express  = require('express');
const app = express();
const path = require('path');

const firebase = require("./helper/firebase")
require("./event/eventTamu")

const modelKaryawan = require("./model/karyawan")
const modelTamu = require("./model/tamu")(firebase)

app.get("/html/home", (_, res)=>{        
    res.sendFile(path.join(__dirname, '/view/index.html'));
})

app.get("/html/login", (_, res)=>{
    res.sendFile(path.join(__dirname, '/view/login.html'));
})

app.get("/html/register", (_, res)=>{
    res.sendFile(path.join(__dirname, '/view/register.html'));
})

app.post("/api/karyawan/add", express.json(),  async (req, res)=>{

    const {email, name, jabatan} = req.body;

    const resRegister = await modelKaryawan.registerKaryawan(email, name, jabatan)

    if(resRegister === true){
        res.status(200).json({message:"Berhasil menambahkan karyawan"})
        return
    }

    res.status(500).json({message:"Gagal menambahkan karyawan"})    

});

app.get("/api/karyawan/:email", async (req, res)=>{

    const {email} = req.params

    const resCheck = await modelKaryawan.checkKaryawan(email)

    if(resCheck.status){
        res.status(200).json({
            message:`Karyawan dengan email ${email} berhasil ditemukan`,
            data:resCheck.data
        })
        return
    }

    res.status(404).json({
        message:`Karyawan dengan email ${email} tidak berhasil ditemukan`,
        data:resCheck.data
    })

})

app.post("/api/tamu/add", express.json(),  async (req, res)=>{

    const {email, tanggal, emailKaryawan} = req.body;

    const isEmailKaryawanExist = await modelKaryawan.checkKaryawan(emailKaryawan)

    if(!isEmailKaryawanExist.status){
        res.status(404).json({message:`Karyawan dengan email ${emailKaryawan} tidak ditemukan`})    
        return
    }

    const resRegister = await modelTamu.registerTamu(email, tanggal, emailKaryawan)    

    if(resRegister === true){
        res.status(200).json({message:"Berhasil menambahkan tamu"})
        return
    }

    res.status(500).json({message:"Gagal menambahkan tamu"})    

});

app.get("/api/tamu/:email", async (req, res)=>{

    const {email} = req.params

    const resCheck = await modelTamu.checkTamu(email)

    if(resCheck.status){
        res.status(200).json({
            message:`Jadwal dengan email ${email} berhasil ditemukan`,
            data:resCheck.data
        })
        return
    }

    res.status(404).json({
        message:`Jadwal dengan email ${email} tidak berhasil ditemukan`,
        data:resCheck.data
    })

})

app.get("/", (_,res)=>{
    res.status(200).json({message:"Hello"});
});


app.listen(4000);