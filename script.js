var carYear = propmt("what year do what the car?");
 carYear = carYear.toUpperCase();
cosole.log("carYeah = " + carYear);
var year= "Unknown";

var carModel = propmt("what model do you want the car?);
 carModel = carModel.toUpperCase();
cosole.log("carModel = " + carModel);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
