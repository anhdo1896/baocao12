var express = require('express');
var router = express.Router();
var Author = require('./../models/author')
/* GET users listing. */
router.get('/', async function(req, res, next) {

            await Author.find({}, (e,result)=>{
                  if(e) 
                    return handlePageError(res, e);
                  return res.json({ message:result })
              })        
    }
      
);
router.post('/', async function(req, res, next) {
  var first = req.body.first
  var family = req.body.family
  var author = new Author({ first_name: first,family_name:family,date_of_birth:'1996-06-18',date_of_death:'1996-06-18' });
  
  await author.save(function (err,result) {
    if (err) return handleError(err); 
    return res.json({message:"Insert success"})
  });
      
});

module.exports = router;