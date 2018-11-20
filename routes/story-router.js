const express = require("express");

const router = express.Router();

const Story = require("../models/user-story-model.js");

const fileUploader = require("../config/file-upload.js")


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

// router.post("/process-story",(req,res,next)=>{
//   res.send(req.body)
//   // const{firstName,lastName,email,place}=req.body;

//   // Story.create({firstName,lastName,email,place})
//   // .then(storyDoc=>{

//   //   res.redirect("see-story/stories")

//   // })
//   // .catch(err =>next(err));
// })


router.post("/process-story", fileUploader.single("avatarUpload"), (req, res, next) => {
  console.log("-------------------------------hello");
  console.log("req file ", req.file);
                      
  const { firstName,lastName, email,place } = req.body;
    console.log("hello");
     let toUpdate = { firstName,lastName, email,place};
     //multer stores the file in req.file
     console.log("req file ", req.file);
    if (req.file) {
      console.log("req file secure url ", req.file.secure_url);
      toUpdate = { firstName,lastName, email, place, avatar: req.file.secure_url };
    }

    Story.create(toUpdate)
  .then(storyDoc=>{

    res.redirect("see-story/stories")

  })
  .catch(err =>next(err));



  });
module.exports = router;
