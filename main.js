const arrow = document.querySelector('.mouseup');
const arrowUp = document.querySelector('.rotate');
function showMenu(){
  document.getElementById("navBar").style.display = "block";
}
const closeMenu = document.getElementById("close")
closeMenu.onclick = function(){
  document.getElementById("navBar").style.display = "none";
}

function reveal(){
  document.getElementById("class-list").style.display="block";
  arrow.src = "images/icon-arrow-up.svg";
}
function companyEl(){
  document.getElementById("myDropdown").style.display="block";
  arrowUp.src = "images/icon-arrow-up.svg";
}
window.onclick = function(e){
  if(!e.target.matches(".show-features, .show-company")){
      var myDropdown = document.getElementById("myDropdown");
      var myDropdown = document.getElementById("class-list");
      // var i;
      // for(i = 0; i<dropdowns.length; i++) {
      //     var openDropdown = dropdowns[i];
          if(myDropdown.classList.contains("show")){
              myDropdown.classList.remove("show");
          }

      }
  }
// const myArray =[];
// let i = 5;
// while(i > -1){XMLHttpRequestEventTarget
//   myArray.push(i);
//   i--;
// }
// console.log(myArray);

// //Action dropdown menu
// function myFunction(){
//   document.getElementById("myDropdown").classList.toggle("show");
// }


// window.onclick = function(e){
//   if(!e.target.matches(".dropbtn")){
//       var myDropdown = document.getElementById("myDropdown");
//       // var i;
//       // for(i = 0; i<dropdowns.length; i++) {
//       //     var openDropdown = dropdowns[i];
//           if(myDropdown.classList.contains("show")){
//               myDropdown.classList.remove("show");
//           }

//       }
//   }
//   //end
//   $(".rotate").click(function () {
//     $(this).toggleClass("down");
// })