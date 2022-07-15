const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const cors = require('cors');
const { response } = require('express');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


module.exports =  function dictionary(word){
    const dictionaryURL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    
    https.get(dictionaryURL, (res) =>{
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () =>{
            let dictionaryData = JSON.parse(data);

            if (dictionaryData[0] !== 'undefined'){
                console.log(word)
            };
        });
    }).on("error", (err) => {
        console.log("Error:" + err.message);
    });
}