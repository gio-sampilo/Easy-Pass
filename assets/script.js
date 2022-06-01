
// Assignment code here

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Arrays to hold all possible characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCase = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// Empty global variables for future use
var chars = "";
var spec;
var lowerCa;
var upperCa;
var numb;

// Function to randomize characters and length based on user selections
function generatePassword() {
// Prompts user to choose amount of characters
  var chars = prompt("How many characters would you like your password to contain? (Between 8-128");

  if (chars < 8 || chars > 128) {
    alert("Length must be between 8 - 128 characters")
  }
// Confirms what type of characters user would prefer
  var spec = confirm("Would you like to include special characters");
  var lowerCa = confirm("Would you like to include lowercase characters");
  var upperCa = confirm("Would you like to include uppercase characters");
  var numb = confirm("Would you like to include numeric characters");

 
// Advises user mandatory to select a character type
  if (!spec && !lowerCa && !upperCa && !numb) {
    alert("You have to select at least one character type");
  }
// Empty array followed by conditions and array combinations based on user selection
    var randomSelectionArray = []

    if (spec) {
      var randomSelectionArray = randomSelectionArray.concat(specialCase);

    }

    if (lowerCa) {
      var randomSelectionArray = randomSelectionArray.concat(lowerCase);
    }

    if (upperCa) {
      var randomSelectionArray = randomSelectionArray.concat(upperCase);
    }

    if (numb) {
      var randomSelectionArray = randomSelectionArray.concat(numberCase);
    }
// Empty array followed by loop to choose password characters at random
    var passwordArray = [];

    for (let i = 0; i < chars; i++) {
      passwordArray = passwordArray + randomSelectionArray[Math.floor(Math.random() * randomSelectionArray.length)];
console.log(passwordArray);
    }

    return passwordArray;
  }


// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



