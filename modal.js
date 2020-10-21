function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal
function closeModal(){
  modalbg.style.display ="none";
}

// Displaying errors
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
//Form validation function
function validate(){
  var firstname = document.reserve.first.value
  var lastname = document.reserve.last.value;
  var email = document.reserve.email.value;
  var quantity = document.reserve.quantity.value;
  var location = document.reserve.location.value;

  var firstError = lastError = mailError = quantityError = locationError = true;

// Validating firstname
if(firstname == "") {
  printError("firstError", "Please enter your name");
} else {
  var regex = /^[a-zA-Z\s]+$/;                
  if(regex.test(name) === false) {
      printError("firstError", "Please enter a valid name");
  } else {
      printError("firstError", "");
      nameErr = false;
  }
}

// Validating secondname
if(lastname == "") {
  printError("lastError", "Please enter your name");
} else {
  var regex = /^[a-zA-Z\s]+$/;                
  if(regex.test(name) === false) {
      printError("lastError", "Please enter a valid name");
  } else {
      printError("lastError", "");
      nameErr = false;
  }
}

// Validate email 
if(email == "") {
  printError("mailError", "Please enter your email address");
} else {
  // Regular expression for basic email validation
  var regex = /^\S+@\S+\.\S+$/;
  if(regex.test(email) === false) {
      printError("mailError", "Please enter a valid email address");
  } else{
      printError("mailError", "");
      emailErr = false;
  }
}

//Validate quantity
if(quantity == "") {
  printError("quantityError", "Please select your gender");
} else {
  printError("quantityError", "");
  quantityError = false;
}

 // Validate gender
 if(location == "") {
  printError("locationError", "Please select your location");
} else {
  printError("locationError", "");
  locationError = false;
}

//Do not send the form if there are errors
if((firstError || lastError || mailError || quantityError || locationError) == true) {
  return false;
} else{
var successMessage= "Thanks for your submission"
}
alert(successMessage);
}