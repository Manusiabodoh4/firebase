//import { getFirestore } from "firebase/firestore"
const { getFirestore } = require("firebase/firestore")
const { getDatabase } = require("firebase/database")

let connection = null
let connectionRealtime = null

function getConnection(){
    if(connection === null){
        connection = getFirestore();
    }
    return connection
}

function getConnectionRealtime(firebase){
    if(connectionRealtime === null){
        connectionRealtime = getDatabase(firebase)
    }
    return connectionRealtime
}

module.exports = {getConnection, getConnectionRealtime}

