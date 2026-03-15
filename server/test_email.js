require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('Testing Email Configuration...');
console.log('User:', process.env.EMAIL_USER);
console.log('Pass:', process.env.EMAIL_PASS ? '****** (Set)' : 'Not Set');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Portfolio Email Test',
    text: 'If you receive this email, your Nodemailer configuration is correct!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('❌ Error sending email:', error);
        if (error.code === 'EAUTH') {
            console.error('\nPOSSIBLE CAUSES:');
            console.error('1. You are using your normal Gmail password instead of an App Password.');
            console.error('2. 2-Step Verification is not enabled.');
            console.error('3. The App Password was typed incorrectly.');
        }
    } else {
        console.log('✅ Email sent successfully: ' + info.response);
    }
});
