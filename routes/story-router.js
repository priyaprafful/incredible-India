const express = require("express");
const router = express.Router();
const Story = require("../models/user-story-model.js");
const fileUploader = require("../config/file-upload.js");

//this is for listing of stories
router.get("/see-story/stories", (req, res, next) => {
  if (req.user == undefined) {
    res.redirect("/login");
    return;
  }

  Story.find()
    .then(storiesResult => {
      //res.send(mysteriousresults)
      res.locals.arrayOfStories = storiesResult;
      res.render("see-story/show-story.hbs");
    })
    .catch(err => next(err));
});

router.get("/allStories", (req, res, next) => {
  if (req.user == undefined) {
    res.redirect("/login");
    return;
  }

  Story.find()
    .then(storiesResult => {
      //res.send(mysteriousresults)
      res.locals.arrayOfStories = storiesResult;
      res.render("see-story/show-story.hbs");
    })
    .catch(err => next(err));
});

//this is for story detail
router.get("/see-story/:storyId", (req, res, next) => {
  if (req.user == undefined) {
    res.redirect("/login");
    return;
  }
  const { storyId } = req.params;
  Story.findById(storyId)
    .then(storyDoc => {
      res.locals.story = storyDoc;
      res.render("see-story/story-detail.hbs");
    })
    .catch(err => next(err));
});

router.post(
  "/process-story",
  fileUploader.single("avatarUpload"),
  (req, res, next) => {
    console.log("-------------------------------hello");
    console.log("req file ", req.file);

    const { user, writerName, title, description, place } = req.body;

    let toUpdate = { user, writerName, title, description, place };
    //multer stores the file in req.file
    console.log("req file ", req.file);

    if (req.file) {
      console.log("req file secure url ", req.file.secure_url);
      toUpdate = {
        user,
        writerName,
        title,
        description,
        place,
        avatar: req.file.secure_url
      };
    }

    Story.create(toUpdate)
      .then(storyDoc => {
        res.redirect("/see-story/stories");
      })
      .catch(err => next(err));
  }
);

module.exports = router;
