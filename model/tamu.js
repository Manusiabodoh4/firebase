//import { collection, addDoc } from "firebase/firestore";
const { doc, setDoc, getDoc } = require("firebase/firestore")
const connection = require("./connection")

function getCollection(){
    return "Tamu"
}

async function registerTamu(email, tangal, emailKaryawan){
    const docTamu = doc(connection.getConnection(), getCollection(), email)
    const objData = {
        tangal,
        emailKaryawan
    }
    try {
        await setDoc(docTamu, objData)           
    } catch (error) {
        console.log(error)
        return false
    }    
    return true
}

async function checkTamu(email){
    
    const docTamu = doc(connection.getConnection(), getCollection(), email)

    const data = await getDoc(docTamu)
    
    const objResponse = {
        status : false,
        data : null        
    }

    if(!data.exists()){
        return objResponse;
    }

    objResponse.status = true
    objResponse.data = data.data()

    return objResponse

}

module.exports = { registerTamu, checkTamu }