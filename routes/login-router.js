//  const express = require("express");

//  const router = express.Router();

//  const bcrypt = require("bcrypt");

//  const emailValidator = require("email-validator");

//  const User = require("../models/user-model.js");

//  router.get("/login",(req,res,next)=>{
//   // res.send("login-views/login-form.hbs");
//   res.render("login-views/login-form.hbs");
//  });

// router.post("/process-signup",(req,res,next)=>{

// const{userName,userEmail,userPassword} = req.body;
// if(!emailValidator.validate(userEmail)){
//   //console.log("invlid email");
//   req.flash("error","userEmail is not valid");
//   res.redirect("/login")
//   return;
// }
// //console.log("hello");
// if(!userPassword||userPassword.match(/[0-9]/)===null){
//   //console.log("password incorrect");

//   req.flash("error","please enter a password and password must contain a number");
//   res.redirect("/login")
// return;
// }

// const encryptedPassword = bcrypt.hashSync(userPassword,10);

// User.create({userName,userEmail,encryptedPassword})
// .then(userDoc=>{
//   req.flash("Congratulations","Signup success");
//   res.redirect("/")

// })
// .catch(err =>next(err));
// });

// router.post("/process-login",(req,res,next)=>{
//   const{userEmail,userPassword} = req.body;

//   User.findOne({userEmail:{$eq:userEmail}})
//   .then(userDoc =>{
//     if (!userDoc){
//       req.flash("error","Please enter a Correct Email");
//       res.redirect("/login");
//     }
//     const {encryptedPassword} = userDoc;
//     if(!bcrypt.compareSync(userPassword,encryptedPassword)){
//       req.flash("error","Please enter a correct password");
//       res.redirect("/login");
//     }
//     else{
//       req.flash("succes","log in success");
//       res.redirect("/")
//     }
//   })

//   .catch(err =>next(err));
// });

// module.exports = router;