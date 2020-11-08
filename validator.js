// Displaying errors
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function showSuccess() {
    document.getElementById('Successy').style.display = "block";
 }

 function reset() {
    document.getElementByName("reserve").reset();
  }


//Form validation function
function validate() {
    var firstname = document.reserve.first.value;
    var lastname = document.reserve.last.value;
    var email = document.reserve.email.value;
    var bday = document.reserve.birthdate.value;
    var quantity = document.reserve.quantity.value;
    var location = document.reserve.location.value;
    var accept = [];
    var checkboxes = document.getElementsByName("accept[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            accept.push(checkboxes[i].value);
        }
    }

    var firstError = lastError = mailError = bdayError = quantityError = locationError = hoErr = true;

    // Validating firstname
    if (firstname == "") {
        document.getElementById('first').style.borderColor = "red";
        printError("firstError", "Please enter your name.");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstname) === false) {
            document.getElementById('first').style.borderColor = "red";
            printError("firstError", "Please enter a valid name.");
        } else if (firstname.length < 2) {
            document.getElementById('first').style.borderColor = "red";
            printError("firstError", "Please at least 2 characters for firstname field.");
        } else {
            printError("firstError", "");
            firstError = false;
        }
    }

    // Validating secondname
    if (lastname == "") {
        document.getElementById('last').style.borderColor = "red";
        printError("lastError", "Please enter your last name.");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastname) === false) {
            document.getElementById('last').style.borderColor = "red";
            printError("lastError", "Please enter a valid name.");
        } else if (lastname.length < 2) {
            document.getElementById('last').style.borderColor = "red";
            printError("lastError", "Please at least 2 characters for lastname field.");
        } else {
            printError("lastError", "");
            lastError = false;
        }
    }

    // Validating email 
    if (email == "") {
        document.getElementById('email').style.borderColor = "red";
        printError("mailError", "Please enter your email address.");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            document.getElementById('email').style.borderColor = "red";
            printError("mailError", "Please enter a valid email address.");
        } else {
            printError("mailError", "");
            mailError = false;
        }
    }

    //Validating bday
    if (bday == "") {
        document.getElementById('birthdate').style.borderColor = "red";
        printError("bdayError", "Please select your birthdate.");
    } else {
        printError("bdayError", "");
        bdayError = false;
    }

    //Validating quantity
    if (quantity == "") {
        document.getElementById('quantity').style.borderColor = "red";
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
    if (accept == "") {
        printError("hoErr", "Please accept terms");
    } else {
        printError("hoErr", "");
        hoErr = false;
    }

    //Do not send the form if there are errors
    if (firstError || lastError || mailError || bdayError || quantityError || locationError || hoErr) {
        return false;
    }
     else {
         //myFunction
         showSuccess("Successy");
         return false;
    }
};

