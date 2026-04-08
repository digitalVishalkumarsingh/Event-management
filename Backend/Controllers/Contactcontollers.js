const Contact = require('../Model/contact');
const nodemailer = require('nodemailer');

// Function to validate required fields
const validateContactForm = (data) => {
    const { fname, lname, email, phone, address, message } = data;
    if (!fname || !lname || !email || !phone || !address || !message) {
        throw new Error("All fields are required");
    }
};

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.controlcontact = async (req, res) => {
    try {
        validateContactForm(req.body);

        const { fname, lname, email, phone, address, message } = req.body;

        const contactform = await Contact.create({ fname, lname, email, phone, address, message });

        // Send email asynchronously — do NOT send another HTTP response inside callback
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your message has been received",
            text: `Hi ${fname},\n\nThank you for contacting us! Your message has been received and our team is reviewing it. You will be contacted within 24 hours.\n\nMessage details:\nFirst Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}\n\nBest regards,\nEventKiya Customer Support Team`,
        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Email send error:", error.message);
            } else {
                console.log("Confirmation email sent:", info.response);
            }
        });

        // Send a single HTTP response
        return res.status(201).json({
            success: true,
            data: contactform,
            message: "Contact form submitted successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "An error occurred while submitting the contact form",
        });
    }
};

exports.getcontact = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve contacts', details: error.message });
    }
};



