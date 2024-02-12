const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("Mongo connected");
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connect;