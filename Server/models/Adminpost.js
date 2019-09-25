const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminPostSchema = new Schema({
  email: {type: String,required: true,},
  title: {type: String,required: false,},
  description: { type: String,required:false },
  endtime: {type: String, required:false},
  starttime: {type: String, required:false},
  time:{type:Number,required:true},
  image: {type: String, required:false},
  Province: {type: String, required:false},
  City: {type: String, required:false},




});

const Adminpost = mongoose.model('Approved', AdminPostSchema);

module.exports = Adminpost;