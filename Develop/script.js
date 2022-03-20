// Assignment Code

let generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//let passwordLength =""
let nums =['0','1','2','3','4','5','6','7','8','9'];
let sChar=['!','@','#','$','%','^','&','*','(',')'];
let lChar=['a','b','c','d','e','f','g','h','i','j','k','l',,'m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let uChar=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let outPassword = [];
let inputValue=[];
let passwordLength=[];

function generatePassword() {
  let password = passwordMachine();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
};

function passwordMachine () {
  let randomPassword = '';
  for (let i = 0; i < passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * passwordLength.length);
  randomPassword = randomPassword + userValue[randomNumber]
  return randomPassword;
};

function prompts(){
  inputValue = [];
  passwordLength = prompt("Please enter a length of at least 8 characters and no more than 128 characters.");
  if(isNaN(passwordLength)|| passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid response");
    return false;
  }
  if (confirm("Would you like your password to include uppercase characters?")) {
    inputValue = inputValue.concat(uChar);
  }
  if (confirm("Would you like your password to include lowercase characters?")) {
  inputValue= inputValue.concat(lChar);
  }
  if (confirm("Would you like your password to include numeric characters?")) {
    inputValue= inputValue.concat(nums);
  }
  if (confirm("Would you like your password to include special characters?")) {
    inputValue= inputValue.concat(sChar);
  }

console.log(userValue)
  return true;
}
generatePassword();
passwordMachine();
prompts();
//  prompt2 = confirm(("Would you like your password to include uppercase characters?"));
//   prompt3 = confirm(("Would you like your password to include lowercase characters?"));
//  prompt4 = confirm(("Would you like your password to include numeric characters?"));
// prompt5 = confirm(("Would you like your password to include special characters?"));


  




// function prompts() {
//   confirm(("Please enter a length of at least 8 characters and no more than 128 characters.", 8 < 128))
//   //(isNaN(inputValue) || inputValue < 8 || inputValue > 128) {
//     alert("ERROR! Please enter a valid number.")
//     return false
//   }}
//     if (("Would you like your password to include uppercase characters?")) {
//     inputValue = inputValue.concat(uChar)
//     }
//     if (confirm("Would you like your password to include lowercase characters?")) {
//       inputValue = inputValue.concat(lChar)
//     }
//   if (confirm("Would you like your password to include numeric characters?")) {
//     inputValue=inputValue.concat(nums);
//   }
//   if (confirm("Would you like your password to include special characters?")) {
//     inputValue=inputValue.concat(sChar);
  }

//research confirm statements 






 






// //// Assignment Code
// let generateBtn = document.querySelector("#generate");✅
// // Write password to the #password input✅
// function generatePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;
// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);}}}}}}}}}}





//let prompt1=prompt("Please enter a length of at least 8 characters and no more than 128 characters.");
// let prompt2=prompt("Would you like your password to include uppercase characters?");
// let prompt3=prompt("Would you like your password to include lowercase characters?");
// let prompt4 =prompt("Would you like your password to include numeric characters?");
// let  prompt5 =prompt("Would you like your password to include special characters?");
