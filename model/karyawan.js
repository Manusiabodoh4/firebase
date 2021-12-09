//import { collection, addDoc } from "firebase/firestore";
const { doc, setDoc, getDoc } = require("firebase/firestore")
const connection = require("./connection")

function getCollection(){
    return "Karyawan"
}

async function registerKaryawan(email, name, position){
    const docKaryawan = doc(connection.getConnection(), getCollection(), email)
    const objData = {
        name : name,
        jabatan : position
    }
    try {
        await setDoc(docKaryawan, objData)           
    } catch (error) {
        console.log(error)
        return false
    }    
    return true
}

async function checkKaryawan(email){

    // console.log(connection.getConnection())

    // console.log(email)
    
    const docKaryawan = doc(connection.getConnection(), getCollection(), email)    

    const data = await getDoc(docKaryawan)
    
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

module.exports = { registerKaryawan, checkKaryawan }