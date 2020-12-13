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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
