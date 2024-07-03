const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Example chatbot logic
app.post('/chat', (req, res) => {
    const { message } = req.body;
    let responseMessage;

    if (message.includes('hello')) {
        responseMessage = 'Hi there! How can I help you?';
    } else if (message.includes('help')) {
        responseMessage = 'Sure, what do you need help with?';
    } else {
        responseMessage = 'I\'m sorry, I don\'t understand.';
    }

    res.json({ response: responseMessage });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
