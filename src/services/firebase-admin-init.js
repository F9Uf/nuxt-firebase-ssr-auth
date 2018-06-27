const admin = require('firebase-admin')
const key = require('../key.json')

module.exports = admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: "https://calumoz-e3ed2.firebaseio.com"
})