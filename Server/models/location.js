const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  email: { type: String, required: true, unique:true},
  Province: {type: String, required:false},
  City: {type: String, required:false},




});

const post = mongoose.model('location', locationSchema);

module.exports = post;