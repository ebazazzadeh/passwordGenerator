
var generateBtn = document.querySelector("#generate");
// num is the number of character the user wants to generate
var num;
// confirmCharacters is an array that keep the type of password that user wants to generate. 
// For example, user wants to produce a password that has just uppercase, number, and symbol
var confirmCharcters=[];

// if the user click on the button the event of onclick will be executed
var elm = document.getElementById('generate');
elm.onclick = function(){
    lenghtOfPassword();
}


function lenghtOfPassword(){
    var numberOfChar=window.prompt("How many character do you want in your password?");
    if ((numberOfChar<8) || (numberOfChar>128)) {
      window.alert("Wrong Number!!!- Please enter the lenght of the Password between 8 and 128.");
      lenghtOfPassword();
    }
    num=numberOfChar;
    return num;
}

function writePassword() {
  confirmCharcters= confirmChar();
  var password= generatePassword(num,confirmCharcters);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// By this function user can choose on their passwork, they want to have uppercase, lowercase, number, or symbol
function confirmChar(){
    confirmCharcters[0] =window.confirm("Do you want Uppercase Character in your password");
    confirmCharcters[1] =window.confirm("Do you want Lowercase Character in your password");
    confirmCharcters[2] =window.confirm("Do you want Number in your password");
    confirmCharcters[3]=window.confirm("Do you want Special Character in your password");
    return confirmCharcters;
}

// uppercaseCharCode has the code of uppercase. According to the ASCII style sheet, they are between 65 and 90
const uppercaseCharCode=generate_char_LowToHigh(65,90);
// lowercaseCharCode has the code of lowercase. According to the ASCII style sheet, they are between 97 and 122
const lowercaseCharCode=generate_char_LowToHigh(97,122);
// numberCharCode has the code of number. According to the ASCII style sheet, they are between 48 and 57
const numberCharCode=generate_char_LowToHigh(48,57);
// symbolCharCode has the code of symbol. According to the ASCII style sheet, they have four different rang.
// First one is between 33 and 47. Second one is between 58 and 64.
// Third one is between 91 and 96, and fourth one is between 123 and 126.
const symbolCharCode=generate_char_LowToHigh(33,47).
              concat(generate_char_LowToHigh(58,64)).
              concat(generate_char_LowToHigh(91,96)).
              concat(generate_char_LowToHigh(123,126));

// By this function every uppercase code, lowercase code, number code, and symbol code will be generated.
function generate_char_LowToHigh(low,high) {
    const array=[];
    for (let i=low; i<=high; i++){
        array.push(i);
    }
    return array;
}

// By this function, I try to generate password
function generatePassword(num,confirmCharcters){
    // charCodes have the whole code that user chose
    var charCodes=[];
    if (confirmCharcters[0]) {charCodes=charCodes.concat(uppercaseCharCode);}
    if (confirmCharcters[1]) {charCodes=charCodes.concat(lowercaseCharCode);}
    if (confirmCharcters[2]) {charCodes=charCodes.concat(numberCharCode);}
    if (confirmCharcters[3]) {charCodes=charCodes.concat(symbolCharCode);}

    //passwordChar is the password that will be generated in the for loop
    const passwordChar=[];
    for(let i=0; i<num; i++){ 
        const charCode=charCodes[Math.floor(Math.random()*charCodes.length)];
        passwordChar.push(String.fromCharCode(charCode));
    }
    return passwordChar.join('');
}
