function show(){
  // document.getElementById("mouseup").style.transform = rotateZ("-180deg");
  document.getElementById("myDropdown").style.display = "block";
}

function reveal(){
  document.getElementById("class-list").style.display=" block";
}
window.onclick = function(e){
  if(!e.target.matches(".show-features")){
      var myDropdown = document.getElementById("myDropdown");
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