const { initializeApp, cert } = require('firebase-admin/app');

const serviceAccount = require("../service-firebase.json");

initializeApp({
    credential:cert(serviceAccount)
})