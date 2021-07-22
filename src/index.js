const express = require('express');
require('./database.js');

const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    return resp.send("Online!");
});

app.post('/api/products', (req, resp) => {
    console.log(req.body.title);
    return resp.send("API fuctional");
});

app.patch('/api/products/:id', (req, resp) => {
    console.log(req.params.id);
    return resp.status(200).send("");
});

app.get('/api/products', (req, resp) => {
    return resp.status(200).send({ "title":"work", "date":"20-07-2021" });
});

app.delete('/api/products/:id', (req, resp) => {
    return resp.send("");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});