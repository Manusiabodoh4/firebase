//import { collection, addDoc } from "firebase/firestore";
const { addDoc, collection, query, where, getDocs } = require("firebase/firestore")
const connection = require("./connection")

module.exports = (firebase) => {      

  const getCollection = () => {
      return "Tamu"
  }

  const registerTamu = async (email, tangal, emailKaryawan) => {
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

