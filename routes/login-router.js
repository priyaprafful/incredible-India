 const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const User = require("../models/user-model.js");
 
router.get("/login",(req,res,next)=>{
  // res.send("login-views/login-form.hbs");
  res.render("login-views/login-form.hbs");
});

router.post("/process-signup",(req,res,next)=>{
  const{firstName,lastName,email,password} = req.body;
  if(!emailValidator.validate(email)){
    //console.log("invlid email");
    req.flash("error","Email is not valid");
    res.redirect("/login")
    return;
  }
  //console.log("hello");
  if(!password||password.match(/[0-9]/)===null){
    //console.log("password incorrect");
    req.flash("error","please enter a password and password must contain a number");
    res.redirect("/login")
  return;
  }
  const encryptedPassword = bcrypt.hashSync(password,10);
  User.create({firstName,lastName,email,encryptedPassword})
  .then(userDoc=>{
    req.flash("Congratulations","Signup success");
    res.redirect("/")
  })
  .catch(err =>next(err));
});

router.post("/process-login",(req,res,next)=>{
  const{email,password} = req.body;
  User.findOne({email:{$eq:email}}).then(userDoc =>{
    if (!userDoc){
      req.flash("error","Please enter a Correct Email");
      res.redirect("/login");
    }
    const {encryptedPassword} = userDoc;
    if(!bcrypt.compareSync(password,encryptedPassword)){
      req.flash("error","Please enter a correct password");
      res.redirect("/login");
    }
    else{
      req.logIn(userDoc,()=>{
      req.flash("succes","log in success");
      res.redirect("/")
    });
    }
  })
  .catch(err =>next(err));
});

router.get("/logout",(req,res,next)=>{
  req.logOut();
  req.flash("succes","logged out suceesfully");
  res.redirect("/")
});

module.exports = router;