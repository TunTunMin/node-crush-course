// Importing Mongoose library
const mongoose = require('mongoose');

// Defining the User schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true // Ensures that each username is unique
  },
  description: {
    type: String,
    required: true,
  },
}, {timestamps: true});

// Creating the Blog model based on the blogSchema
const Blog = mongoose.model('Blog', blogSchema);

// Exporting the Blog model
module.exports = Blog;