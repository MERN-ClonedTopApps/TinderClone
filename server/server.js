import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Cards from './cardModel.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl =
  'mongodb+srv://boss:bossPASS123@tinderclone.fpruw.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Add Middlewares
app.use(express.json());
app.use(cors());

// Db Config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// API Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
