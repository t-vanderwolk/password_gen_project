document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword());

let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let sChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
let lChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let confirmLength = "";
let confirmC;
let confirmNC;
let confirmU;
let confirmL;

// Prompt to confirm the character length
function generatePassword() {
  let confirmLength = (confirm("Please enter a length of at least 8 characters and no more than 128 characters."));
}

  // Loop if answer is outside of the parameters 
  if(confirmLength <= 8 || confirmLength >= 128) {
      alert("Password length must be between 8-128 characters Try again");
      let confirmLength = (prompt("Please enter a length of at least 8 characters and no more than 128 characters"));
      } 

      alert(`Your password will have ${confirmLength} characters`);

    confirmC = confirm("Click OK to include special characters");
    confirmNC = confirm("Click OK to include numeric characters");    
    cconfirmL = confirm("Click OK to include lowercase characters");
    confirmU = confirm("Click OK to include uppercase characters");
      // Loop if answer is not OK
      if(confirmU === false && confirmL === false && confirmC === false && confirmNC === false) {
        alert("You must choose at least one parameter");
        let confirmC = confirm("Click OK to confirm if you would like to include special characters");
        let confirmNC = confirm("Click OK to confirm if you would like to include numeric characters");    
        let cconfirmL = confirm("Click OK to confirm if you would like to include lowercase characters");
        let confirmU = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      let passwordCharacters =[];
    
    if (confirmC) {
      passwordCharacters = passwordCharacters.concat(sChar)
    }

    if (confirmNC) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (cconfirmL) {
      passwordCharacters = passwordCharacters.concat(lChar)
    }

    if (confirmU) {
      passwordCharacters = passwordCharacters.concat(uChar)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array targeted
      let randomPassword = ""
      
      for (let i = 0; i < confirmL; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password
}
