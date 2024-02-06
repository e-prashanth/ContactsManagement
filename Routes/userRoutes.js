const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getCurrentUser
} = require("../Controllers/userControllers");
const validateToken = require('../middleware/validateTokenHandle');

router.post('/register',registerUser);

router.post("/login",loginUser);

router.get('/current',validateToken,getCurrentUser);

module.exports = router;