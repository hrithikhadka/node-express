//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New Contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  res.status(200).json({ message: "Create Contact" });
};

//@desc GET Contact
//@route GET /api/contacts/:id
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc update contact
//@route POST /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc delete Contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
