
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const cors = require('cors');
const { response } = require('express');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


module.exports = function checkDict(word) {

    const dictionaryURL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    const req = https.get(dictionaryURL, (res) => {
  
        res.on('data', (d) => {
          
            let dictionaryData = JSON.parse(d);
            if (dictionaryData[0] === undefined) {
                return ("failed");
            } else if (dictionaryData[0] != undefined) {
                console.log(word);
                return (word);
                
            }

        });
    });
};

