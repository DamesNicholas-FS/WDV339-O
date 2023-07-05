const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
    name: String
});

const Models = mongoose.model('Models', modelsSchema, 'models');

module.exports = Models;