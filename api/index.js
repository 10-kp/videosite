const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// console.log(process.env);
// console.log('DB working');

//   .then(() => console.log('DB Connection Successfull'))
//   .catch((err) => {
//     console.error(err);
//   });

app.use(express.json());

app.use('/api/auth', authRoute);

// 2nd way for the .env file - Works
main().catch((err) => console.log(err));

// CONNECT WITH MONGO_URI!
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
console.log('DB Connection Successful!');

app.listen(8800, () => {
  console.log('Backend Server is running!');
});
