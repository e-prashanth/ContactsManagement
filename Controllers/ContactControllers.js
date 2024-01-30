const getContacts = function(req,res){
    res.status(200);
    res.json({message:"get all contacts"});
};

const createContact = function(req,res){
    res.status(201).json({message:"creating a contact"});
    console.log(req.body);
};

const getContact = function(req,res){
    const id = req.params.id;
    res.status(200).json({message:`get a single contact using id`});
}

const updateContact = function(req,res){
    res.status(200).json({message:`Updating the contact at the id: ${req.params.id}`});
}

const deleteContact = function(req,res){
    res.status(200).json({message:`Deleting the contact at the id : ${req.params.id}`});
}


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}