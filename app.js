require('dotenv').config({ path: './.config.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const PORT = process.env.PORT;

const statesRouter = require('./routes/states');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/states', cors(), statesRouter);

app.get('/', (req, res) => {
  res.send({ message: 'App running' });
});

app.listen(PORT, () => {
  console.log(`App listenig on port ${PORT}`);
});