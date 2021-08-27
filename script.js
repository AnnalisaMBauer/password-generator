// Assignment Code
var generateBtn = document.querySelector("#generate");

// Why do we have these strings here? So we are able to store the data for the password generator will pull from.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()_+";

debugger;

function getRandom(str) {
  // What is going on here? This is a random number generator function that we created that the if statements go through to creat the password based on the users inputs.
  var randomIndex = Math.floor(Math.random() * str.length);
  // and here?
  return str[randomIndex];
}

// Write password to the #password input
function writePassword() {
  // What is the difference between return and console log? the return will let us return the data onto the web page. the console log will log the data in the console.
  // What happens if we console log our password instead of returning it? The data won't display on the webpage if we console log it and not return it.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Ask the user for their password criteria
  // 8 characters and no more than 128 characters
  // Prompt the user for the password length
  var length = prompt("How long would you like your password to be?");

  // If the length is less than 8 or more than 128
  if (length < 8 || length > 128) {
    // alert the user that they messed up
    alert("Your password must be between 8 and 128");
    // exit the function early, (use the return keyword)
    return "";
  }

  // What are we doing here? We are storing data for our for loop and if statements to grab/use/call.
  var useLowercase = confirm("Would you like to use lower case characters?");
  var useUppercase = confirm("Would you like to use upper case characters?");
  var useNumeric = confirm("Would you like to use numeric characters?");
  var useSpecial = confirm("Would you like to use special characters?");

  var password2 = "";
  for (var i = 0; i < length; i++) {
    if (useLowercase) {
      password2 += getRandom(lowercase);
    }
    if (useUppercase) {
      password2 += getRandom(uppercase);
    }
    if (useNumeric) {
      password2 += getRandom(numeric);
    }
    if (useSpecial) {
      password2 += getRandom(special);
    }
  }

  // Why is this if statement necessary? - to prevent the user from going through the prompts and not selecting any of the variables.
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("We need at least one option to be chosen.");
    return "";
  }

  // `return` that password
  return password2.substr(0, length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
