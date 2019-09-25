const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
var locationRouter = require('./routes/location');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var imageRouter = require('./routes/images');
var approvedRouter = require('./routes/approved');

var adminRouter = require('./routes/admin')
mongoose.connect("mongodb+srv://username:password@comcon-amjho.mongodb.net/databasename?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.use('/location', locationRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/images',imageRouter);
app.use('/approved',approvedRouter)
app.use('/admin', adminRouter);

app.listen(3000, '196.24.172.173', function() {
    console.log('Listening to port:  ' + 3000);
});