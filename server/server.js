const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const e = require('express');

app.use(express.json());
app.use(cors());

app.post('/api/create', (req, res) => {
    const { name, age } = req.body;
    console.log(name, age)
    res.json({ message: 'Object recived: Name: '+ name + 'age: ' + age });    
});

app.get('/api/read', (req, res) => {
    const query = req.query;
     const ObjectJohn = {
        name: "JohnDoe",
        age: 30
    }
    const ObjectRick = {
        name: "Rick",
        age: 25
    }

    if (query.name === 'JohnDoe') {
        res.json(ObjectJohn);
    } else if (query.name === 'Rick') {
        res.json(ObjectRick);
    } else {
        res.json({ message: 'Object not found' });
    }
});

app.put('/api/update', (req, res) => {
    const { name, age } = req.body;
    console.log(name, age)
    res.json({ message: 'Object updated: Name: '+ name + ' age: ' + age });    
});

app.delete('/api/delete', (req, res) => {
    
    res.json({ message: 'Object deleted'});    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;