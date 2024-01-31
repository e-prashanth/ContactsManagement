const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getCurrentUser
} = require("../Controllers/userControllers");
router.post('/register',registerUser);

router.post("/login",loginUser);

router.get('/current',getCurrentUser);

module.exports = router;