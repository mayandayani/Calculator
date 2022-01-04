// Numbers
let button0 = document.getElementById('zero');
let button1 = document.getElementById('one');
let button2 = document.getElementById('two');
let button3 = document.getElementById('three');
let button4 = document.getElementById('four');
let button5 = document.getElementById('five');
let button6 = document.getElementById('six');
let button7 = document.getElementById('seven');
let button8 = document.getElementById('eight');
let button9 = document.getElementById('nine');

// Clear
let buttonClear = document.getElementById('clear');
buttonClear.addEventListener("click", clear);

// Equal
let buttonEqual = document.getElementById('equal');
buttonEqual.addEventListener("click", equal);

// Decimal
let buttonDecimal = document.getElementById('decimal');
buttonDecimal.addEventListener("click", decimal);

// Calculator Screen
// let calcScreen = document.getElementById('calcScreen');

// Display Screen
let miniScreen = document.getElementById('miniScreen')

// Operators
let buttonPlus = document.getElementById('plus');
buttonPlus.addEventListener("click", plus);

let buttonMinus = document.getElementById('minus');
buttonMinus.addEventListener("click", minus);

let buttonMultiple = document.getElementById('multiple');
buttonMultiple.addEventListener("click", multiple);

let buttonDivide = document.getElementById('divide');
buttonDivide.addEventListener("click", divide);


// Event Listeners
button0.addEventListener("click", showNumber0);
button1.addEventListener("click", showNumber1);
button2.addEventListener("click", showNumber2);
button3.addEventListener("click", showNumber3);
button4.addEventListener("click", showNumber4);
button5.addEventListener("click", showNumber5);
button6.addEventListener("click", showNumber6);
button7.addEventListener("click", showNumber7);
button8.addEventListener("click", showNumber8);
button9.addEventListener("click", showNumber9);


// Number Functions
function showNumber0() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button0.value;
}
function showNumber1() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button1.value;
}
function showNumber2() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button2.value;
}
function showNumber3() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button3.value;
}
function showNumber4() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button4.value;
}
function showNumber5() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button5.value;
}
function showNumber6() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button6.value;
}
function showNumber7() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button7.value;
}
function showNumber8() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button8.value;
}
function showNumber9() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " +  button9.value;
}


// Operator Functions

function plus() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " + buttonPlus.value;
}

function minus() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " + buttonMinus.value;
}

function multiple() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " + buttonMultiple.value;
}

function divide() {
    miniScreen.innerHTML = miniScreen.innerHTML + " " + buttonDivide.value;
}


// Clear Function

function clear() {
    miniScreen.innerHTML = " ";
    calcScreen.innerHTML = "0";
}

// Decimcal Function
function decimal() {
    miniScreen.innerHTML = miniScreen.innerHTML + " . "
}

function equal() {
    let x = eval(miniScreen.innerHTML);
    calcScreen.innerHTML = x;
}

