const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Todo', schema);

module.exports = model;
