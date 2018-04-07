const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(bodyParser.json());
app.use(cors());

const port = 8686;
app.listen(port, () => {
    console.log('Tuned in to channel ' + port);
})