const express = require("express");
const errorHandler = require("./middleware/errorhandler");
require("dotenv").config();
const connectDb = require('./config/dbConnection');
const app = express();
const PORT = process.env.PORT;
connectDb();
app.use(express.json());
app.use('/api/contacts',require('./Routes/contactRoutes'));
app.use('/api/users',require('./Routes/userRoutes'))
app.use(errorHandler);
app.listen(PORT,function(){
    console.log(`the server is running in the port ${PORT}`);
})

