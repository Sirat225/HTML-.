const mongoose = require('mongoose');
const connectDB = () => {
  return mongoose.connect('mongodb://127.0.0.1:27017/university')
    .then(() => console.log("Connected to database successfully!"))
    .catch(err => console.log("Connection failed:", err));
};
module.exports = connectDB;