const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
  origin: process.env.CORS,
  methods: ['POST'],
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
