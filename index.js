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