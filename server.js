const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Endpoint to get the contact
app.get('/contact', (req, res) => {
    console.log('GET /contact');
    const contactPath = path.join(__dirname, 'contact.json'); // Ensure the path is correct
    fs.readFile(contactPath, 'utf-8', (err, data) => { // Include 'utf-8' to get string data
        if (err) {
            res.status(500).send('Error reading the contact file');
            return;
        }
        res.json(JSON.parse(data)); // Use res.json to send JSON data directly
    });
});

app.get('/', (req, res) => {
    res.send('Contact Manager API');
});

// Endpoint to update the contact
// Endpoint to update the contact
app.post('/contact', (req, res) => {
    const contactPath = path.join(__dirname, 'contact.json');
    fs.writeFile(contactPath, JSON.stringify(req.body, null, 2), (err) => {
        if (err) {
            res.status(500).send('Error writing the contact file');
            return;
        }
        res.json({ status: 'success' });
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


