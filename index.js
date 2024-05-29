const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello From Home Page");
});

app.get('/about', (req, res) => {
    // return res.send("Hello form About Page." + " hey " + req.query.name + " you are " + req.query.age); // http://localhost:8000/about?name=Amar&age=20
    return res.send(`Hi ${req.query.name}`);
});

app.listen(8000, () => console.log("Server Started!"));
