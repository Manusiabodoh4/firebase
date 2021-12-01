//import { getFirestore } from "firebase/firestore"
const { getFirestore } = require("firebase/firestore")

let connection = null

function getConnection(){
    if(connection === null){
        connection = getFirestore();
    }
    return connection
}

module.exports = {getConnection}

