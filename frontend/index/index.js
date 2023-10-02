function toogleNav() {
    if (document.getElementById("mySidenav").style.width == "250px") {
      closeNav();
  }
    else{
      openNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function toogleAccountPopUp(){
  console.log("yeey")
  if (document.getElementById("account-popup").style.display == "flex") {
    closeAccountPopUp();
  }
  else{
    openAccountPopUp();
  }
}

function openAccountPopUp(){
  document.getElementById("account-popup").style.display = "flex";
}

function closeAccountPopUp(){
  document.getElementById("account-popup").style.display = "none";
}