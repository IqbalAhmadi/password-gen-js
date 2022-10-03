// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = "@#$%^&*";
var lowerCase = "bacdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";


function generatePassword() {
  console.log("Hey! You clicked the button!");
  var finalPassword = "";
  // 1. Prompt the user for password criteria
  var length = window.prompt(
    "How many characters do you want your password to be?"
  );

  if (length < 8) {
    alert("Sorry, password needs to be between 8 and 128 characters");
  }

  var specialCharacters = confirm(
    "Do you want your password to inculde special characters?"
  );
  var upperCaseCharacters = confirm(
    "Do you want your password to inculde uppercase characters?"
  );
  var lowerCaseCharacters = confirm(
    "Do you want your password to inculde lowercase characters?"
  );
  var numericCharacters = confirm(
    "Do you want your password to inculde numberic characters?"
  );

  for (var i = 0; i < length; i++) {
    if (upperCaseCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 26);
      finalPassword = finalPassword + upperCase.charAt(randomPick);
    }

    if (lowerCaseCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 26);
      finalPassword = finalPassword + lowerCase.charAt(randomPick);
    }

    if (specialCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 7);
      finalPassword = finalPassword + special.charAt(randomPick);
    }

    if (numericCharacters === true && finalPassword.length < length) {
      var randomPick = Math.floor(Math.random() * 10);
      finalPassword = finalPassword + number.charAt(randomPick);
    }
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
