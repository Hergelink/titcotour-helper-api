const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(bodyParser.json());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/openai', require('./routes/openaiRoutes'));

app.post('/tour-advice', async (req, res) => {
  const { tourAdvice } = req.body;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});