const mongoose = require('mongoose');
const dns = require('dns');
dns.getServers(['8.8.8.8'])



function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to DB")
    })
}

module.exports = connectDB;