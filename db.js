const mongoose = require('mongoose');

const connectDB = (server) => {
    mongoose.connect('mongodb+srv://awaiszubair417:awaiszubair@cluster0.volzst6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => { console.log("Db connected"); return 'Success' })
        .then(() => { server() })
        .catch((err) => { console.error("Error is: ", err.message) })
}

module.exports = connectDB;