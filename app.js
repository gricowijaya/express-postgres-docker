require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { Users } = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'test build docker image sendiri!'
    });
});

app.get('/add-data', async (req, res, next) => {
    try {
        randomName = "Testing To Create Name"

        const user = await Users.create({
            username: randomName
        });

        return res.status(200).json({
            status: true,
            message: 'berhasil',
            data: user
        });
    } catch (err) {
        next(err);
    }
});

app.get('/get-data', async (req, res, next) => {
    try {
        const user = await Users.findAll();

        return res.status(200).json({
            status: true,
            message: 'berhasil',
            data: user
        });
    } catch (err) {
        next(err);
    }
});

app.listen(PORT, () => console.log('listening on port', PORT));
