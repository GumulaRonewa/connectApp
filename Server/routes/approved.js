const router = require('express').Router();
let post = require('../models/Adminpost');

router.route('/mypost/:email').get((req, res) => {
  var sub=req.param("email");
    var id=sub.substring(7,sub.length);
       post.find({email:id})
      .then(posts => res.json(posts))
      .catch(err => console.log("Error"));  
    
});
router.route('/:loc').get((req, res) => {
  var sub=req.param("loc");
    var id=sub.substring(5,sub.length);
    var location=id.split(',');
    console.log(id);
    prov=location[0];
    city=location[1];
    post.find({ $or: [ { Province:prov}, { Province: "Any" } ], $or: [ { City:city}, { City: "Any" } ]})
      .then(posts => res.json(posts))
      .catch(err => console.log("Error"));  
    
});
router.route('/remove/:id').get((req, res) => {
    var sub=req.param("id");
    var id=sub.substring(4,sub.length);

    post.findByIdAndRemove(id)
    .then(() => console.log("sucess"))
    .catch(err => console.log(id));
});
router.route('/add').post((req, res) => {
  console.log("added");
 const email=req.body.email;
  const title = req.body.title;
  const description =req.body.description;
  const date= req.body.date;
  const starttime= req.body.start;
  const endtime= req.body.end;
  const Province = req.body.Province;
  const time=Date.now();
  const image =req.body.image;
  const City=req.body.City;
  const newpost = new post({email,title,description,starttime,endtime,time,image,Province,City});
  newpost.save()
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;