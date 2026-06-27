const dns = require('dns');

dns.setServers(['8.8.8.8'])




const app = require('./src/app')
require('dotenv').config()
const connectDB = require('./src/config/database')
const mongoose = require('mongoose');



connectDB();




app.listen("3000", () => {
    console.log("port is running on 3000");
})