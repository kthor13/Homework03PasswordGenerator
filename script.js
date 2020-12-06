var pwdLength;
var lowerCase;
var upperCase;
var numeric;
var specialChar;

function pwdRequirements() {
    pwdLength = prompt("How long do you want your password to be? Choose a length between 8 and 128.");
    lowerCase = prompt("Do you want to include lower case letters?");
    upperCase = prompt("Do you want to include upper case letters?");
    numeric = prompt("Do you want to include numbers?");
    specialChar = prompt("Do you want to include special characters?");

}

//document.getElementById("btn").addEventListener("click", pwdRequirements());
pwdRequirements();