require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/my-portfolio/contact', (req, res) => {
    console.log("Received request at /my-portfolio/contact");
    const { email, name, message } = req.body;

    const content = {
        to: 'yana.kozma@gmail.com',
        from: 'yana.kozma@gmail.com',
        subject: `New Message From ${name} (${email})`,
        text: `${message}\n\nSent from: ${email}`,
        html: `<strong>Message:</strong> ${message} <br><br> <strong>Sent from:</strong> ${email}`
    };

    sgMail
        .send(content)
        .then(() => res.status(200).json({ status: 'Message sent successfully' }))
        .catch((error) => res.status(400).json({ status: error.message }));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});