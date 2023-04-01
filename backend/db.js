const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://production:admin@cluster0.5asdgfi.mongodb.net/?retryWrites=true&w=majority/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
