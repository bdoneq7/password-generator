
// Function to Generate Password 
function passwordGen() {

  // Set Variables for Choice
  var lowercaseChoice;
  var uppercaseChoice;
  var numericChoice;
  var specialChoice;
  var notselected = 0;

  // Ask for Length of Password
  var length = prompt("What is your password LENGTH? Passwords MUST be between 8 and 128 characters");
  while (length < 8 || length > 128) {
    length = prompt("Remember passwords should be between 8 and 128 characters. What is your password length?");
  }

  // Ask for Lowercase Characters
  var lowercase = confirm("Do you want to use lowercase characters in your password?" + '\n' + '\n' + "OK = 'Yes'" + '\n' + "Cancel = 'No'");
  if( lowercase == true ) {
    lowercaseChoice = "abcdefghijklmnopqrstuvwxyz";
  } 
  else if (lowercase == false) { 
    lowercaseChoice = "";
    notselected = notselected + 1;
    prompt("Remember you must choose at least 1 character type! You have currently not selected " + notselected + " character types." );
  }

  // Ask for UPPERCASE Characters
  var uppercase = confirm("Do you want to use UPPERCASE characters in your password?" + '\n' + '\n' + "OK = 'Yes'" + '\n' + "Cancel = 'No'");
  if( uppercase == true ) {
    uppercaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  else if (uppercase == false) { 
    uppercaseChoice = "";
    notselected = notselected + 1;
    prompt("Remember you must choose at least 1 character type! You have currently not selected " + notselected + " character types." );
  }

  // Ask for Numbers
  var numeric = confirm("Do you want to use numbers in your password?" + '\n' + '\n' + "OK = 'Yes'" + '\n' + "Cancel = 'No'");
  if( numeric == true ) {
    numericChoice = "0123456789";
  } 
  else if (numeric == false) { 
    numericChoice = "";
    notselected = notselected + 1;
    prompt("Remember you must choose at least 1 character type! You have currently not selected " + notselected + " character types." );
  }

  // Ask for Special Characters
  var special = confirm("Do you want to use special characters in your password?" + '\n' + '\n' + "OK = 'Yes'" + '\n' + "Cancel = 'No'");
  if( special == true ) {
    specialChoice = "!#$%&*+/@";
  }
  else if (special == false) { 
    specialChoice = "";
    notselected = notselected + 1;
    while (notselected > 3) {
      prompt("Remember you must choose at least 1 character type! You have not selected ANY character types. Please Start Over." ); 
      passwordGen();
    }
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


