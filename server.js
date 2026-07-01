const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ye login details hain
const USER_DATA = { email: "agricropwl@outlook.com", password: "123456" };

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === USER_DATA.email && password === USER_DATA.password) {
        res.status(200).json({ message: "Success" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));