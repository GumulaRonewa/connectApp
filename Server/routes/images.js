
var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

let formidable= require('express-formidable');
router.use(formidable({
    uploadDir:'public/images'
}))
router.get('/retrieve/:name', function(req, res, next) {
    var sub=req.param("name");
    var name=sub.substring(6,sub.length);
    res.sendFile(path.join(__dirname, "../public/images/"+name));
});


router.post('/add', function (req, res) {
    var fs = require('fs');
    var str=req.files.image.path;
    var sub=str.substring(0,14);
    fs.rename(req.files.image.path,sub+req.files.image.name, function(err) {
    if (err) {
        console.log('ERROR: ' + err);
    }
   } );

});


module.exports = router;
