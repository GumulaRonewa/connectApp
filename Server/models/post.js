const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {type: String,required: false,},
  description: { type: String,required:false },
  time: {type: String, required:true},
  image: {type: String, required:false},
   Province: {type: String, required:true},
  City: {type: String, required:false},




});

const post = mongoose.model('post', PostSchema);

module.exports = post;