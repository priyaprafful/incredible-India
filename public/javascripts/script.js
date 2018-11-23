document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

setTimeout(function(){
  $(".success-messages").hide();
},3000);


setTimeout(function(){
  $(".error-messages").hide();
},3000);



// $('.tab a').on('click', function (e) {

//   e.preventDefault();
//   console.log( $(this));

//   $(this).parent().show();
//   $(this).parent().siblings().hide();

//   target = $(this).attr('href');

//   $('.tab-content > div').not(target).hide();

//   $(target).fadeIn(600);

// });

$(".login").on("click", function(e) {
  e.preventDefault();

  $("#login").show();
  $("#signup").hide();

  $(".login").css("background-color", "#1ab188");
  $(".loginlink").css("color", "white");
  $(".signup").css("background-color", "rgba(160, 179, 176, 0.25)");
  $(".signuplink").css("color", "#a0b3b0");
});

$(".signup").on("click", function(e) {
  e.preventDefault();

  $("#login").hide();
  $("#signup").show();

  $(".login").css("background-color", "rgba(160, 179, 176, 0.25)");
  $(".loginlink").css("color", "#a0b3b0");
  $(".signup").css("background-color", "#1ab188");
  $(".signuplink").css("color", "white");
});

function responsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu-list") {
    x.className += " responsive";
  } else {
    x.className = "menu-list";
  }
}
