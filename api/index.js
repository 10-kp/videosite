const express = require('express');
const app = express();
// const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

dotenv.config();
// require('dotenv').config({ path: './env' });

mongoose
  .connect(
    // 'mongodb://kp:kp11235@cluster1-shard-00-00.qsngh.mongodb.net:27017,cluster1-shard-00-01.qsngh.mongodb.net:27017,cluster1-shard-00-02.qsngh.mongodb.net:27017/?ssl=true&replicaSet=atlas-4qurdv-shard-0&authSource=admin&retryWrites=true&w=majority',
    // ||
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    }
  )
  .then(() => console.log('DB Connection Successfull'))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
// app.use('/api/movies', movieRoute);
// app.use('/api/lists', listRoute);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
