const asyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");
const getContacts = asyncHandler(async function (req, res) {
  const contacts = await contactModel.find();
  res.status(200);
  res.json({ message: "getting all contacts", contacts: contacts });
});

const createContact = asyncHandler(async function (req, res) {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(404);
    throw new Error("All fields are mandatory");
  }
  const newContact = contactModel.create({
    name,
    email,
    phone,
  });
  res.status(201).json({ message: "creating a contact", newContact });
  console.log(req.body);
});

const getContact = asyncHandler(async function (req, res) {
  const id = req.params.id;
  const contact = await contactModel.findById(id);
  if (contact) {
    res.status(200).json({ message: "got the contact", contact });
  } else {
    throw new Error("No user with this ID");
  }
});

const updateContact = asyncHandler(async function (req, res) {
    const id = req.params.id;
    const contact = await contactModel.findById(id);
    if(contact){
        const updatedContact = await contactModel.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        );
        res.status(200).json({message:"the contact is updated successfully",updatedContact});
    }
    else{
        throw new Error("No user with this ID");
    }

});

const deleteContact = asyncHandler(async function (req, res) {
    const id = req.params.id;
    const  contact = await contactModel.findById(id);
    if(contact){
        await contactModel.findByIdAndDelete(id);
        res.status(200).json({message:'The contact has been deleted'});
    }
    else{
        throw new Error("No user with this ID:");
    }
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
