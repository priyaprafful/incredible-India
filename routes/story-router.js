const express = require("express");

const router = express.Router();

const Story = require("../models/user-story-model.js");


router.get("/see-story/stories", (req, res, next) => {
  Story.find()
  //City.find()
  .then(storiesResult => {
    //res.send(mysteriousresults)
    res.locals.arrayOfStories = storiesResult;
    res.render("see-story/show-story.hbs");
    })

    .catch(err => next(err));
});

router.post("/process-story",(req,res,next)=>{
  const{firstName,lastName,email,place}=req.body;

  Story.create({firstName,lastName,email,place})
  .then(storyDoc=>{

    res.redirect("see-story/stories")

  })
  .catch(err =>next(err));
})

module.exports = router;
