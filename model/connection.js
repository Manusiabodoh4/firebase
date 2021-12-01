const { getFirestore } = require('firebase-admin/firestore');

let database = null;

function getDatabase(){
    if(database === null){
        database = getFirestore();
    }
    return database;
}

module.exports = {getDatabase}