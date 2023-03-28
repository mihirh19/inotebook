const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://admin:admin@cluster0.6almknp.mongodb.net/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;