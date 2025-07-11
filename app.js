const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello ${name}` });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});