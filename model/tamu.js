//import { collection, addDoc } from "firebase/firestore";
const { addDoc, collection, query, where, getDocs } = require("firebase/firestore")
const connection = require("./connection")

function getCollection(){
    return "Tamu"
}

async function registerTamu(email, tangal, emailKaryawan){
    const collectionTamu = collection(connection.getConnection(), getCollection())
    const objData = {
        email,
        tangal,
        emailKaryawan
    }
    try {
        await addDoc(collectionTamu, objData)           
    } catch (error) {
        console.log(error)
        return false
    }    
    return true
}

async function checkTamu(email){
    
    const collectionTamu = collection(connection.getConnection(), getCollection())
    const q = query(collectionTamu, where("email", "==", email))

    const data = await getDocs(q)
    
    const objResponse = {
        status : false,
        data : null        
    }

    if(data.size === 0){
        return objResponse;
    }

    const arr = [];

    data.forEach(item => {
        arr.push(item.data())
    })

    objResponse.status = true;
    objResponse.data = arr;

    return objResponse
    

}

module.exports = { registerTamu, checkTamu };