num1 = document.querySelector("#num1");
num2 = document.querySelector("#num2");
num3 = document.querySelector("#num3");
num4 = document.querySelector("#num4");
num5 = document.querySelector("#num5");
num6 = document.querySelector("#num6");
num7 = document.querySelector("#num7");
num8 = document.querySelector("#num8");
num9 = document.querySelector("#num9");
num0 = document.querySelector("#num0");
operator1 = document.querySelector("#operator1");
btn1 = document.querySelector("#btn1");
operation = document.querySelector("#operation");
display = document.querySelector(".display");
let firstNumber = ``;
let test1 = 0;
let wynik = 0;

num0.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `0`;
  display.innerHTML += "0";
  console.log(firstNumber);
});

num1.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `1`;
  display.innerHTML += "1";
  console.log(firstNumber);
});
num2.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `2`;
  display.innerHTML += "2";
  console.log(firstNumber);
});
num3.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `3`;
  display.innerHTML += "3";
  console.log(firstNumber);
});
num4.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `4`;
  display.innerHTML += "4";
  console.log(firstNumber);
});
num5.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `5`;
  display.innerHTML += "5";
  console.log(firstNumber);
});
num6.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `6`;
  display.innerHTML += "6";
  console.log(firstNumber);
});
num7.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `7`;
  display.innerHTML += "7";
  console.log(firstNumber);
});
num8.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `8`;
  display.innerHTML += "8";
  console.log(firstNumber);
});
num9.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstNumber += `9`;
  display.innerHTML += "9";
  console.log(firstNumber);
});
operator1.addEventListener("click", function (evt) {
  evt.preventDefault();
  test1 += Number(firstNumber);
  firstNumber = ``;
  display.innerHTML += " + ";
  console.log(firstNumber);
  console.log(test1);
});
btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("aa");
  let wynik = Number(firstNumber) + test1;
  console.log(wynik.value);
  display.innerHTML += " = " + wynik;
});
