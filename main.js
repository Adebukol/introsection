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
  document.getElementById("myDropdown").style.display="none";
  arrow.src = "images/icon-arrow-up.svg";
  arrowUp.src = "images/icon-arrow-down.svg";
}
function companyEl(){
  document.getElementById("myDropdown").style.display="block";
  document.getElementById("class-list").style.display="none";
  arrowUp.src = "images/icon-arrow-up.svg";
  arrow.src = "images/icon-arrow-down.svg";
}
