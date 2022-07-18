
const axios = require('axios');



module.exports = function checkDict(word) {

    const dictionaryURL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    axios
        .get(dictionaryURL)    //returns a promise
        .then(response => {
            console.log(word + " is a word")
            return word + " is a word";
                        
        })
        .catch(error => {
            console.log("error message = " + error)
        });

};


// return new Promise((resolve, reject) => {
//     const req = https.get(dictionaryURL, (res) => {

//         res.on('data', (d) => {

//             let dictionaryData = JSON.parse(d);
//             if (dictionaryData[0] === undefined) {
//                 reject("not a word");
//             } else if (dictionaryData[0] != undefined) {
//                 console.log(word);
//                 resolve(word);

//             }

//         });
//     });
// })