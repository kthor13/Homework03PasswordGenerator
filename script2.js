// Variables
var buttonEl = document.querySelector("#pwdButton");
 
//console.log("button:", buttonEl);

// Available character arrays
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '=']; 
var upperLetters;

// Function to request user's password requirements.
//generateBtn.addEventListener('click', writePassword);


function pwdRequirements() {
    var pwdLength = prompt("How long do you want your password to be? Choose a length between 8 and 128.");
        /* if (pwdLength < 8 || pwdLength > 128) {
            alert("Password length is not between 8 and 128!")
        } */
    var lowerCase = confirm("Do you want to include lower case letters?");
    var upperCase = confirm("Do you want to include upper case letters?");
    var numeric = confirm("Do you want to include numbers?");
    var specialChar = confirm("Do you want to include special characters?");
} 

//Build arrays based on parameters
/* if (lowerCase === true && upperCase === true && numeric === true && specialChar === true) {
    var pwdArray = letters.concat((upperLetters = letters.map(letters => letters.toUpperCase())), numbers, specials);
} */


//Function to generate password.
function generatePwd() {
    for (var i = 0; i < pwdLength.length; i++) {
        //var password = ;
      }
}

//document.getElementById("btn").addEventListener("click", pwdRequirements());

//pwdRequirements();

buttonEl.addEventListener('click', pwdRequirements);