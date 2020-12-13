// Available character arrays
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '=']; 
var upperLetters;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var pwdLength = prompt("How long do you want your password to be? Choose a length between 8 and 128.");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var upperCase = confirm("Do you want to include upper case letters?");
  var numeric = confirm("Do you want to include numbers?");
  var specialChar = confirm("Do you want to include special characters?");
}

// for loop to build password
for (var i = 0; i < pwdLength.length; i++) {
  
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);