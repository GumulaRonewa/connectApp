const router = require('express').Router();
let post = require('../models/post');

router.route('/:loc').get((req, res) => {
  var sub=req.param("loc");
    var id=sub.substring(5,sub.length);
    var location=id.split(',');
    prov=location[0];
    city=location[1];
    if(city=="null"){
          console.log(prov);
       post.find({Province:prov})
      .then(posts => res.json(posts))
      .catch(err => console.log("Error"));  
    }
});

router.route('/remove/:id').get((req, res) => {
    var sub=req.param("id");
    var id=sub.substring(4,sub.length);
  post.findByIdAndRemove(id)
    .then(() => console.log("sucess"))
    .catch(err => console.log(id));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description =req.body.description;
  const time= req.body.time;
  
  const image =req.body.image;
   const Province = req.body.Province;
  const City =req.body.City;
  const newpost = new post({title,description,date,time,category,venue,image,Province,City});
  newpost.save()
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
