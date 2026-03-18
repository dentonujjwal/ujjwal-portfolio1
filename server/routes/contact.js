const express = require('express');
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');

// Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all fields' });
    }

    try {
        // 1. Send Email Notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new message from your portfolio website: \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('❌ Error sending email:', error);
                    reject(error);
                } else {
                    console.log('✅ Email sent successfully: ' + info.response);
                    resolve(info);
                }
            });
        });

        // 2. Try to Save to Database (Optional for Render without remote DB)
        let dbInsertId = null;
        try {
            const [result] = await db.execute(
                'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
                [name, email, message]
            );
            dbInsertId = result.insertId;
        } catch (dbError) {
            console.error('⚠️ Could not save to database, but email was sent:', dbError.message);
        }

        res.status(201).json({
            message: 'Message sent successfully',
            id: dbInsertId,
            emailStatus: 'Email sent successfully'
        });
    } catch (error) {
        console.error('Error in contact form submission:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

module.exports = router;
