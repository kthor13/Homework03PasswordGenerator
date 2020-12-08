// Variables
var pwdLength;
var lowerCase;
var upperCase;
var numeric;
var specialChar;

// Available character arrays
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = []

// Function to request user's password requirements.
document.getElementById("btn").onclick(pwdRequirements());
function pwdRequirements() {
    pwdLength = prompt("How long do you want your password to be? Choose a length between 8 and 128.");
    lowerCase = confirm("Do you want to include lower case letters?");
    upperCase = confirm("Do you want to include upper case letters?");
    numeric = confirm("Do you want to include numbers?");
    specialChar = confirm("Do you want to include special characters?");

}

//Function to generate password.
function generatePwd() {
    for (var i = 0; i < pwdLength.length; i++) {
        ;
      }
}

//document.getElementById("btn").addEventListener("click", pwdRequirements());
pwdRequirements();
console.log(pwdLength);
console.log(lowerCase);
console.log(upperCase);
console.log(numeric);
console.log(specialChar);