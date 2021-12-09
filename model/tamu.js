//import { collection, addDoc } from "firebase/firestore";
const { addDoc, collection, query, where, getDocs } = require("firebase/firestore")
const { ref, set } = require("firebase/database");
const { v4: uuidv4 } = require('uuid');

const connection = require("./connection")

module.exports = (firebase) => {      

  const getCollection = (id) => {
    return "Tamu/"+id
  }

  const registerTamu = async (email, tangal, emailKaryawan) => {
    // console.log(firebase)
    const id = uuidv4()
    const collectionTamu = ref(connection.getConnectionRealtime(firebase), getCollection(id))
    const objData = {
        email,
        tangal,
        emailKaryawan
    }
    try {
      await set(collectionTamu, objData)          
    } catch (error) {
      return false
    }
    return true
  }
  
  const checkTamu = async (email) => {
      
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

  return {
    getCollection,
    checkTamu,
    registerTamu
  }

}

