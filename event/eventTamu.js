//import { collection, onSnapshot } from "firebase/firestore";

const { collection, onSnapshot } = require("firebase/firestore")
const connection = require("../model/connection")

const collectionName = "Tamu"

const collectionTamu = collection(connection.getConnection(), collectionName)

const unTamu = onSnapshot(collectionTamu, function(doc){
    //Ini adalah response ketika terjadi perubahan pada collection Tamu.
    const arr = [];
    doc.forEach(item=>{
        arr.push(item.data())
    })
    console.log(arr)
})
