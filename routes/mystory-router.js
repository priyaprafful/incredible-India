const express = require("express");
const router = express.Router();
const Story = require("../models/user-story-model.js");

router.get("/myStories", (req, res, next) => {
  console.log("hello")
  const userEmail = req.user.email;
  Story.find({ user: { $eq: userEmail } }) .then(storyResults => {
    //res.send(storyResults);
    res.locals.storyArray = storyResults;
    res.render("user-stories.hbs");
  })
  .catch(err => next(err));
  
 });
 module.exports = router;