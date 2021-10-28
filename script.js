
// Function to Generate Password 
function passwordGen() {

var length = Number(prompt("What is your password length? Must be between 8 and 128"));
// ******* FIX LENGTH VALIDATION ********
// if length < 8 || > 128 {
  // alert("Password must be between 8 and 128 characters");
// }

//ask for lowercase
var lowercase = prompt("Do you want to use lowercase characters?");

//ask for uppercase
var uppercase = prompt("Do you want to use UPPERCASE characters?");

//ask for numbers
var numeric = prompt("Do you want to use numbers?");

//ask for special
var special = prompt("Do you want to use special characters?");

  var lowercaseSet = "";
  var uppercaseSet = "";
  var numericSet = "";
  var specialSet = "";

  if( lowercase = true ) {
    lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
  } 
  else { // ******** FIX ELSE - STILL GENERATES IF CANCEL SELECTED
    lowercaseSet = false;
  }

  if( uppercase = true ) {
    uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  else { // ******** FIX ELSE - STILL GENERATES IF CANCEL SELECTED
    uppercaseSet = false;
  }

  if( numeric = true ) {
    numericSet = "0123456789";
  } 
  else { // ******** FIX ELSE - STILL GENERATES IF CANCEL SELECTED
    numericSet = false;
  }

  if( special = true ) {
    specialSet = "!#$%&*+/@";
  }
  else { // ******** FIX ELSE - STILL GENERATES IF CANCEL SELECTED
    specialSet = false;
  }
  
  //return value
  var combine = lowercaseSet + uppercaseSet + numericSet + specialSet;
  var result = "";
  for (var i = 0; i < length; i++) {
    //picks a character within lowercaseSet and uppercaseSet at index of random number
    result += combine.charAt(Math.floor(Math.random()  * combine.length));
    document.getElementById("password").innerHTML = result;
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


