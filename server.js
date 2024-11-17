const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '0.0.0.0';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://kaveenr24:12345@cluster0.1hg1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.log('MongoDB Error: ', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node Server listening to ${server.address().port}`)
});

app.use('/api', router);