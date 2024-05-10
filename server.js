const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Server Listening' })
})

app.listen(3000, () => {
    console.log("Server Listening on port 3000");
})