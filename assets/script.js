// Assignment code here
var spec;
var lowerCa;
var upperCa;
var numb;

var charCrit = prompt("Which criteria would you like in your password?")
var charNums = prompt("How many characters would you like in your password?")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
