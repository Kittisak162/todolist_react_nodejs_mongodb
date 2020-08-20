require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection;

conn.on('error', () => {
    console.error('DB Error!!');
});

conn.on('open', () => {
    console.log('DB Connection successfully');
});
