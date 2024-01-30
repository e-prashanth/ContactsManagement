const express = require('express');
const router = express.Router();
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require('../Controllers/ContactControllers');

router.get("/",getContacts);
router.post("/",createContact);
router.get("/:id",getContact);
router.route('/:id').put(updateContact);
router.delete('/:id',deleteContact);

module.exports =  router;