import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: "First announce" },
        { id: 2, name: "Second announce" },
        { id: 3, name: "Third announce" },
    ])
})

app.listen(3333)