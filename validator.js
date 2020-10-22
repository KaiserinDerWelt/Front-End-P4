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
    var accept = [];
    var checkboxes = document.getElementsByName("accept[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            accept.push(checkboxes[i].value);
        }
    }
  
    var firstError = lastError = mailError = bdayError = quantityError = locationError = hoErr = true;
  
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
   // Validating Checkbox
   if(accept == "") {
    printError("hoErr", "Please accept terms");
    } else {
    printError("hoErr", "");
    hoErr = false;
    }
  
    //Do not send the form if there are errors
    if ((firstError || lastError || mailError || bdayError || quantityError || locationError || hoErr) == true) {
        return false;
    } else {
        var successMessage = "Thanks for your submission";
        alert(successMessage);
    }
  }