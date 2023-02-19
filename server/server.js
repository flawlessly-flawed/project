const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.route('/api/register')
  .get((req, res) => {
    res.send('This is the GET request handler for /api/register');
  })
  .post((req, res) => {
    const { name, email, pass } = req.body;
    console.log(name,email, pass);
    // do something with the data (e.g. save to a database)
    res.json({ status: 'success', message: 'Registration successful' });
  });

  
  

app.listen(3003, () => {
  console.log(`Server is running on port 3npm run 3000.`);
});