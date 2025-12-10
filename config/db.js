const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/pokedex');
    console.log('Connected to MongoDB Pokedex database');
    } catch (err) {
    console.error('Error connecting to MongoDB Pokedex database:', err);
    }
};

module.exports = connectDB;