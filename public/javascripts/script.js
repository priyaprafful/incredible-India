document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

console.log("hi");

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

  $(".login").css("background-color", "black");
  $(".loginlink").css("color", "white");
  $(".signup").css("background-color", "white");
  $(".signuplink").css("color", "black");
});

$(".signup").on("click", function(e) {
  e.preventDefault();

  $("#login").hide();
  $("#signup").show();

  $(".login").css("background-color", "white");
  $(".loginlink").css("color", "black");
  $(".signup").css("background-color", "black");
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
