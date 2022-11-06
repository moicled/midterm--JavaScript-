let firstForm = document.querySelector("#first-form");
let secondForm = document.querySelector("#second-form");
let final = document.querySelector("#final");

var carYear = propmt("what year do what the car?");
 carYear = carYear.toUpperCase();
cosole.log("carYear = " + carYear);

var carMake = propmt("what make do what the car?");
 carMake = carMAke.toUpperCase();
cosole.log("carMake = " + carMake);


var carModel = propmt("what model do you want the car?);
 carModel = carModel.toUpperCase();
cosole.log("carModel = " + carModel);

 getPrice = function() {
            var numVal1 = Number(document.getElementById("price").value);
            var numVal2 = Number(document.getElementById("discount").value) / 100;
            var totalValue = numVal1 - (numVal1 * numVal2)
            document.getElementById("total").value = totalValue.toFixed(2);
        }

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
 secondForm.className = "hide";
  final.className = "show";
});
