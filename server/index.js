const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello")
})

const PORT = 3001;

app.listen(PORT, (req, res) => {
    console.log(`server is running on PORT ${PORT}`);
})
