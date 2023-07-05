if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');

// Connect to MongoDB

async function connect() {
    try {
        await mongoose.connect(process.env.URL_DB)
        console.log('Connect to MongoDB successfully!!!');
    } catch (error) {
        console.error(`'Connect to MongoDB failure!' + ${error}`);
    }
}

module.exports = { connect };