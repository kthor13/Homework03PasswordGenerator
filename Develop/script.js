// Available character arrays
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '=']; 
var pwdArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to get user's password requirements
function pwdRequirements () {
  var pwdLength = parseInt(prompt("How long do you want your password to be? Choose a length between 8 and 128."));
  while ((Number.isNaN(pwdLength)) || pwdLength < 8 || pwdLength > 128) {
      //if (pwdLength < 8 || pwdLength > 128 || pwdLength === NaN) {
      alert("Your password must be a number between 8 and 128 characters!");
      pwdLength = parseInt(prompt("How long do you want your password to be? Choose a length between 8 and 128."));
    //} 
  }  
  var lowerCase = confirm("Do you want to include lower case letters?");
  var upperCase = confirm("Do you want to include upper case letters?");
  var numeric = confirm("Do you want to include numbers?");
  var specialChar = confirm("Do you want to include special characters?");
  console.log(pwdLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialChar);
}

// Create password
function generatePassword () {
  if (lowerCase === true && upperCase === true && numeric === true && specialChar === true) {
    pwdArray = lowerLetters.concat(upperLetters, numbers, specials);
    console.log(pwdArray);
  }

  // for loop to build password
  for (var i = 0; i < pwdLength.length; i++) {
  
  }

  
}

// Write password to the #password input
function writePassword() {
  pwdRequirements();
  if (!lowerCase && !upperCase && !numeric && !specialChar) {
    alert("You must choose at least one!");
    pwdRequirements();
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  pwdArray = lowerLetters.concat(upperLetters, numbers, specials);
  console.log(pwdArray);
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
