const inputSlider= document.querySelectorAll(".input-container input");
const lengthNumber=document.querySelectorAll(".input-container p");
 updateValue();

const dataDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn =document.querySelector("[data-copy]");
const uppercaseCheck = document.querySelector("[#uppercase]");
const lowercaseCheck = document.querySelector("[#lowercase]");
const numberCheck = document.querySelector("[#number]");
const symbolCheck = document.querySelector("[#symbol]");
const indicator = document.querySelector("[data-indicator]");
const generateBtn=document.querySelector("[.generateBtn]");
const allcheckBox=document.querySelectorAll("[input[type=checkbox]]");
const symbol= '-_=+()*&<>?/|\@#!+;:""^$.,{}[]'
 function updateValue(){
    lengthNumber[1].innerHTML = inputSlider[0].value;
       
}
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)) + min;

}
function generateRandomNumber(){
    return generateRandomNumber(0,9);
}
function generateLowerCase(){
    return string.fromCharCode(generateLowerCase(97,123));
}
function generateUpperCase(){
    return string.fromCharCode(generateUpperCase(65,91));
}