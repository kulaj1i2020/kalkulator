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
operator2 = document.querySelector("#operator2");
operator3 = document.querySelector("#operator3");
operator4 = document.querySelector("#operator4");
btn1 = document.querySelector("#btn1");
display = document.querySelector(".display");
let firstNumber = ``;
let secondNumber = 0;
let wynik = 0;
let operation = 0;

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
  secondNumber = Number(firstNumber);
  firstNumber = ``;
  operation = 1;
  display.innerHTML += " + ";
});
operator2.addEventListener("click", function (evt) {
  evt.preventDefault();
  secondNumber = Number(firstNumber);
  firstNumber = ``;
  operation = 2;
  display.innerHTML += " - ";
});
operator3.addEventListener("click", function (evt) {
  evt.preventDefault();
  secondNumber = Number(firstNumber);
  firstNumber = ``;
  operation = 3;
  display.innerHTML += " / ";
});
operator4.addEventListener("click", function (evt) {
  evt.preventDefault();
  secondNumber = Number(firstNumber);
  firstNumber = ``;
  operation = 4;
  display.innerHTML += " * ";
});
btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("aa");
  switch (operation) {
    case 1:
      wynik = +secondNumber + +firstNumber;
      secondNumber = 0;
      firstNumber = wynik;
      console.log("abcd23");
      break;
    case 2:
      wynik = +secondNumber - +firstNumber;
      secondNumber = 0;
      firstNumber = wynik;
      break;
    case 3:
      if (firstNumber.value == 0) {
        display.innerHTML = "Nie dziel przez 0!!!";
      } else {
        wynik = +secondNumber / +firstNumber;
        secondNumber = 0;
        firstNumber = wynik;
      }
      break;
    case 4:
      wynik = +secondNumber * +firstNumber;
      secondNumber = 0;
      firstNumber = wynik;
  }
  display.innerHTML = wynik + " ";
});
