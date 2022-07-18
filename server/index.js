const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logic = require('./logic');
const checkDict = require('./dictionary.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello")
})

app.post('/api', (req, res) => {
    const stringDigits = req.body.string;

    const wordsArray = logic(stringDigits)

    console.log(wordsArray);
    //  actualWords = wordsArray.forEach(word => {
        console.log(checkDict("hello"));
    //  });
       
// console.log(actualWords);
    const response = { words: logic(stringDigits) };
    res.end(JSON.stringify(response));
});

const PORT = 3001;

app.listen(PORT, (req, res) => {
    console.log(`server is running on PORT ${PORT}`);
})
