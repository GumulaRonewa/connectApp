const router = require('express').Router();
let location = require('../models/location');
router.route('/add').post((req, res) => {
  const email=req.body.email;
  const Province = req.body.Province;
  const City=req.body.City;
  const newpost = new location({email,Province,City});
  newpost.save()
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update').post((req, res) => {
 const filter = { email: req.body.email };
 const update = { Province: req.body.Province,City:req.body.City }
 console.log(req.body.email);
 

 location.findOneAndUpdate(filter,update)
.then(() => console.log('updated!'))
 .catch(err =>  console.log('Error: update' ))

});
router.route('/details/:email').get((req, res) => {
  var sub=req.param("email");
  var id=sub.substring(7,sub.length);
  location.find({email:id})
  .then(locations => res.json(locations))
  .catch(err => console.log("Error"));  

});
module.exports = router;
