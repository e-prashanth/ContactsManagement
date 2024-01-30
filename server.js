const express = require("express");
const errorHandler = require("./middleware/errorhandler");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use('/api/',require('./Routes/contactRoutes'));
app.use(errorHandler);
app.listen(PORT,function(){
    console.log(`the server is running in the port ${PORT}`);
})

