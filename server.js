const express = require('express');
const db = require('./db');
const User = require('./models/User');
const app = express();

app.use(express.json({ extended: false }))


app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Server Listening Checking' })
})

app.post('/', async (req, res) => {
    const { name, email, phone, role, password } = req.body;
    console.log(name, email, phone, role, password)
    try {
        const data = { name, email, phone, role, password }
        const user = await User.create(data);
        console.log(user)
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }
})

async function Server() {
    try {
        db(startServer)
    } catch (error) {
        console.log(error);
    }
}

function startServer() {
    app.listen(3000, () => {
        console.log("Server Listening on port 3000");
    })
}

Server();

