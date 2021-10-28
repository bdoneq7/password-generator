
// Function to Generate Password 
function passwordGen() {

  // Set Variables for Choice
  var lowercaseChoice;
  var uppercaseChoice;
  var numericChoice;
  var specialChoice;

  // Ask for Length of Password
  var length = prompt("What is your password length? Passwords MUST be between 8 and 128 characters");
  while (length < 8 || length > 128) {
    length = prompt("Remember passwords should be between 8 and 128 characters. What is your password length?");
  }

  // Ask for Lowercase Characters
  var lowercase = confirm("Do you want to use lowercase characters?");
  if( lowercase == true ) {
    lowercaseChoice = "abcdefghijklmnopqrstuvwxyz";
  } 
  else if (lowercase == false) { 
    lowercaseChoice = "";
  }

  // Ask for UPPERCASE Characters
  var uppercase = confirm("Do you want to use UPPERCASE characters?");
  if( uppercase == true ) {
    uppercaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  else if (uppercase == false) { 
    uppercaseChoice = "";
  }

  // Ask for Numbers
  var numeric = confirm("Do you want to use numbers?");
  if( numeric == true ) {
    numericChoice = "0123456789";
  } 
  else if (numeric == false) { 
    numericChoice = "";
  }

  // Ask for Special Characters
  var special = confirm("Do you want to use special characters?");
  if( special == true ) {
    specialChoice = "!#$%&*+/@";
  }
  else if (special == false) { 
    specialChoice = "";
  }

  // Generate Password Based on Input
  var choices = lowercaseChoice + uppercaseChoice + numericChoice + specialChoice;
  var securepassword = "";
  for (var i = 0; i < length; i++) {
    securepassword += choices.charAt(Math.floor(Math.random()  * choices.length));
    document.getElementById("password").innerHTML = "Your Secure Password" + '\n' + '\n' + securepassword;
  }
  
}


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


