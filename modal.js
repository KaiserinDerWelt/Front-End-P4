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
function validate() {
  var firstname = document.reserve.first.value
  var lastname = document.reserve.last.value;
  var email = document.reserve.email.value;
  var bday = document.reserve.birthdate.value;
  var quantity = document.reserve.quantity.value;
  var location = document.reserve.location.value;
  var condition = document.reserve.term.value;


  var firstError = lastError = mailError = bdayError = quantityError = locationError = conditionError = true;

  // Validating firstname
  if (firstname == "") {
      printError("firstError", "Please enter your name.");
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(firstname) === false) {
          printError("firstError", "Please enter a valid name.");
      } else {
          printError("firstError", "");
          firstError = false;
      }
  }

  // Validating secondname
  if (lastname == "") {
      printError("lastError", "Please enter your last name.");
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(lastname) === false) {
          printError("lastError", "Please at least 2 characters for lastname field.");
      } else {
          printError("lastError", "");
          lastError = false;
      }
  }

  // Validating email 
  if (email == "") {
      printError("mailError", "Please enter your email address.");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
          printError("mailError", "Please enter a valid email address.");
      } else {
          printError("mailError", "");
          emailErr = false;
      }
  }

  //Validating bday
  if (bday == "") {
      printError("bdayError", "Please select your birthdate.");
  } else {
      printError("bdayError", "");
      bdayError = false;
  }

  //Validating quantity
  if (quantity == "") {
      printError("quantityError", "Please select number of attendants.");
  } else {
      printError("quantityError", "");
      quantityError = false;
  }

  // Validating location
  if (location == "") {
      printError("locationError", "Please select your location.");
  } else {
      printError("locationError", "");
      locationError = false;
  }

  // Validating terms and conditions
  if (condition == "") {
      printError("conditionError", "Please accept our terms.");
  } else {
      printError("conditionError", "");
      conditionError = false;
  }

  //Do not send the form if there are errors
  if ((firstError || lastError || mailError || bdayError || quantityError || locationError || conditionError) == true) {
      return false;
  } else {
      var successMessage = "Thanks for your submission";
      alert(successMessage);
  }
}