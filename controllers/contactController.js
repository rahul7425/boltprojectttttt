const Contact = require('../models/contactModel');

const submitContactForm = async (req, res) => {
  try {
    console.log('submitContactForm called with:', req.body); // <-- log request body

    const { name, email, phone, service, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      console.log('Required fields missing');
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    const contact = new Contact({ name, email, phone, service, subject, message });
    await contact.save();

    console.log('Contact saved successfully');
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { submitContactForm };
