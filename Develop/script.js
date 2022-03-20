// Assignment Code

let generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
let password = document.getElementById("#password");


//let passwordLength =""
let nums =['0','1','2','3','4','5','6','7','8','9'];
let sChar=['!','@','#','$','%','^','&','*','(',')'];
let lChar=['a','b','c','d','e','f','g','h','i','j','k','l',,'m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let uChar=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let outPassword = "";
let inputValue="";
let passwordLength="";
// function generatePassword(prompt1,prompt2){
//   if(prompt1 === true);
//   prompt2)
// };

let prompt1=prompt("Please enter a length of at least 8 characters and no more than 128 characters.");
let prompt2=prompt("Would you like your password to include uppercase characters?");
let prompt3=prompt("Would you like your password to include lowercase characters?");
let prompt4 =prompt("Would you like your password to include numeric characters?");
let prompt5 =prompt("Would you like your password to include special characters?");


  


function writePassword() {
   let inputValue = generatePassword();
   let passwordText = document.querySelector("#password");
   passwordText.value = password;
};

function generatePassword ()
{for (let i = 0; i <= inputValue.length; i++) {
  let randomNumber = Math.floor(Math.random() * passwordLength.length);
  password += inputValue.substring(randomNumber, randomNumber +1);
};

function prompt() {
  inputValue = prompt("Please enter a length of at least 8 characters and no more than 128 characters.", 8 < 128);
  if(isNaN(inputValue) || inputValue < 8 || inputValue > 128) {
    alert("ERROR! Please enter a valid number.")
    return false
  }}
    if (("Would you like your password to include uppercase characters?")) {
    inputValue = inputValue.concat(uChar)
    }
    if (confirm("Would you like your password to include lowercase characters?")) {
      inputValue = inputValue.concat(lChar)
    }
  if (confirm("Would you like your password to include numeric characters?")) {
    inputValue=inputValue.concat(nums);
  }
  if (confirm("Would you like your password to include special characters?")) {
    inputValue=inputValue.concat(sChar);
  }}

//research confirm statements 






 






// //// Assignment Code
// let generateBtn = document.querySelector("#generate");✅
// // Write password to the #password input✅
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);}}}}}}}}}}





//let prompt1=prompt("Please enter a length of at least 8 characters and no more than 128 characters.");
// let prompt2=prompt("Would you like your password to include uppercase characters?");
// let prompt3=prompt("Would you like your password to include lowercase characters?");
// let prompt4 =prompt("Would you like your password to include numeric characters?");
// let  prompt5 =prompt("Would you like your password to include special characters?");
