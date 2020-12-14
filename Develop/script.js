// Available character arrays
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '=']; 
var pwdArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password
function generatePassword () {
  var pwdLength = parseInt(prompt("How long do you want your password to be? Choose a length between 8 and 128."));
  while ((Number.isNaN(pwdLength)) || pwdLength < 8 || pwdLength > 128) {
      alert("Your password must be a number between 8 and 128 characters!");
      pwdLength = parseInt(prompt("How long do you want your password to be? Choose a length between 8 and 128."));
  }  
  var lowerCase = confirm("Do you want to include lower case letters?");
  var upperCase = confirm("Do you want to include upper case letters?");
  var numeric = confirm("Do you want to include numbers?");
  var specialChar = confirm("Do you want to include special characters?");

 // If statements to build the array for the password based on the user's criteria.
  if (!lowerCase && !upperCase && !numeric && !specialChar) {
    alert("You must choose at least one!");
  }

  if (lowerCase && upperCase && numeric && specialChar) {
    pwdArray = lowerLetters.concat(upperLetters, numbers, specials);
  }
  else if (lowerCase && upperCase && numeric) {
    pwdArray = lowerLetters.concat(upperLetters, numbers);
  }
  else if (lowerCase && upperCase && specialChar) {
    pwdArray = lowerLetters.concat(upperLetters, specials);
  }
  else if (lowerCase && numeric && specialChar) {
    pwdArray = lowerLetters.concat(numbers, specials);
  }
  else if (upperCase && numeric && specialChar) {
    pwdArray = upperLetters.concat(numbers, specials);
  }
    else if (lowerCase && upperCase) {
    pwdArray = lowerLetters.concat(upperLetters);
  }
  else if (lowerCase && numeric) {
    pwdArray = lowerLetters.concat(numbers);
  }
  else if (lowerCase && specialChar) {
    pwdArray = lowerLetters.concat(specialChar);
  }
  else if (upperCase && numeric) {
    pwdArray = upperLetters.concat(numbers);
  }
  else if (upperCase && specialChar) {
    pwdArray = upperLetters.concat(specials);
  }
  else if (numeric && specialChar) {
    pwdArray = numbers.concat(specials);
  }
  else if (lowerCase) {
    pwdArray = lowerLetters;
  }
  else if (upperCase) {
    pwdArray = upperLetters;
  }
  else if (numeric) {
    pwdArray = numbers;
  }
  else if (specialChar) {
    pwdArray = specials;
  }
    
  //password variable
  var password = "";

  // for loop to build password
  for (var i = 0; i < pwdLength; i++) {
    var randItem = Math.floor(Math.random() * pwdArray.length);
    password += pwdArray[randItem];
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
    
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);