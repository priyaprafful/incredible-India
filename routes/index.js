const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get("/addStory",(req,res,next)=>{
  if(!req.user){
    req.flash("error","You have to be logged in to add your blog")
    res.redirect("/login");
  }
  else{
    res.render("add-story/add-story.hbs")
  }
})




module.exports = router;