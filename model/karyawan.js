const connection = require("./connection")

let coll = null;

function getCollectionKaryawan(){
    if(coll === null){
        coll = connection.getDatabase().collection("Karyawan")                
    }
    return coll
}

async function registerKaryawan(email, name, jabatan){

    const res = await getCollectionKaryawan().doc(email).set({
        name,
        jabatan
    })
    
    console.log("Document save with Email", email)
    console.log(res)

    return true

}

module.exports = {registerKaryawan}
