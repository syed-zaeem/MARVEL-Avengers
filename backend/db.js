const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://zaeem:12345@cluster0.lbtgmla.mongodb.net/Avengers';

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected to MongoDB successfully');
    } catch (error) {
      console.error(error);
    }
  };

module.exports = connectToMongo;