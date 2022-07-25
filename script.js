// // Assignment Code
var generateBtn = document.querySelector("#generate");
// User input variables: 
var enter;
var verifyNumber;
var verifyLowercase;
var verifyUppercase;
var verifyCharacter;
// Password variable values:
// Alphabetical Characters a-z
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase alphabetical characters A-Z
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);
// Numeric characters choices 
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special characters options
character = ["+", ",", "$", "%", "&", "'", "!", "#", "(", ")", " ^ ", "_", "`", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", "{", "|", "}", "~" ,"-", ".", "/", "*",  "\:", "\;"];
// Returns the first element within the document that matches the specified selectors
var get = document.querySelector("#generate");
// Attaches an event handler to an element without overwriting existing handlers
get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// function for the prompts and also confirms
//   1. Prompt the user for the password criteria. 
//     a. Password characters between 8 to 128 
//     b. lowercase, uppercase, numbers and special characters
//   2. Validate the input 
//   3. Generate password based on criteria 

//   4. Display password on page. 
 
// function to generate password
function generatePassword() {
  // prompted for the length of the password between at least 8 characters and no more than 128 characters
  enter = parseInt(prompt("How many characters will be in your password? Choose between 8 and 128."));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128 characters"));

  } else {
      // Continues once user input is validated
      // Prompted for password option input
      verifyLowercase = confirm("Should the Password contain Lowercase Letters?");
      verifyUppercase = confirm("Should the Password contain Uppercase Letters?");
      verifyNumber = confirm("Should the Password contain Numbers?");
      verifyCharacter = confirm("Should the Password contain Symbols?");
  };

  // Else if criteria options not being selected
  if (!verifyLowercase && !verifyUppercase && !verifyNumber && !verifyCharacter ) {
      choices = alert("You must choose a criteria!");

  }
  // First if statement that uses user input prompts to determine choices
  // Else if all 4 prompt options are selected
  else if (verifyCharacter && verifyNumber && verifyUppercase && verifyLowercase) {

      choices = character.concat(number, alpha, alpha2);
  }
  // Else if for 3 options are selected
  else if (verifyCharacter && verifyLowercase && verifyUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (verifyCharacter && verifyUppercase && verifyNumber) {
      choices = character.concat(number, alpha2);
  }
  else if (verifyCharacter && verifyLowercase && verifyNumber) {
      choices = character.concat(number, alpha);
  }
  else if (verifyNumber && verifyLowercase && verifyUppercase) {
      choices = number.concat(alpha, alpha2);
  }
  // Else if for 2 options are selected
  else if (verifyCharacter && verifyLowercase) {
      choices = character.concat(number);

  } else if (verifyCharacter && verifyNumber) {
      choices = character.concat(alpha);

  } else if (verifyCharacter && verifyUppercase) {
      choices = character.concat(alpha2);
  }
  else if (verifyLowercase && verifyNumber) {
      choices = alpha.concat(number);

  } else if (verifyLowercase && verifyUppercase) {
      choices = alpha.concat(alpha2);

  } else if (verifyNumber && verifyUppercase) {
      choices = number.concat(alpha2);
  }
  // Else if for 1 option is selected
  else if (verifyLowercase) {
    choices = alpha;
  }
  else if (verifyCharacter) {
      choices = character;
  }
  else if (verifyNumber) {
      choices = number;
  }

  // Created space variable to fill uppercase conversion
  else if (verifyUppercase) {
      choices = space.concat(alpha2);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Begin random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// This function places the new generated password into the textbox replacing the text 'Your Secure Password'
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}