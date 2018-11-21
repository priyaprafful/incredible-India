document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

console.log("hi");

var postBtn = document.querySelector(".post-button");
var commentList = document.querySelector("ol");
var inputTag = document.querySelector("input");
var deleteBtn = document.querySelector(".delete");

// postBtn.onclick = function() {
//   console.log("coucou post comment");
//   var newLi = document.createElement("li");
//   newLi.innerHTML = inputTag.value + '<button class="delete">🗑</button>';
//   commentList.appendChild(newLi);
//   var newBtn = newLi.querySelector(".delete");
//   newBtn.onclick = function() {
//     console.log("coucou delete button");
//     var isOkay = confirm("Are you sure you want to delete this comment?");
//     if (isOkay) {
//       var parentLi = newBtn.parentNode;
//       parentLi.removeChild();
//     }
//   };
//   inputTag.value = "";
// };

// deleteBtn.forEach(function(oneButton) {
//   oneButton.onclick = function() {
//     console.log("coucou delete button");

//     var isOkay = confirm("Are you sure you want to delete this comment?");
//     if (isOkay) {
//       var parentLi = oneButton.parentNode;
//       parentLi.remove();
//     }
//   };
// });
