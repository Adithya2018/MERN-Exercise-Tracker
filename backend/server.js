const express = require('express');
const mongoose = require('mongoose');  // this will help us to connect to mongoDB database
const cors = require('cors');

require('dotenv').config();

// Express server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

// now let's start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
