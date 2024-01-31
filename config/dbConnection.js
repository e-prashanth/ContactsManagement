const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async function(){
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to the mongodb database");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;