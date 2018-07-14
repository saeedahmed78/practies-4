let numb1;
let numb2;
let resultEl;

function setValues() {
    numb1 = parseInt(document.querySelector("#numb1").value);
    numb2 = parseInt(document.querySelector("#numb2").value);
    resultEl = document.querySelector("p");
}

function add() {
   setValues();
   resultEl.innerHTML = numb1 + " + " + numb2 + " = " + (numb1 + numb2);
}

function subtract() {
    setValues();
    resultEl.innerHTML = numb1 + " - " + numb2 + " = " + (numb1 - numb2);
}

function multiply() {
    setValues();
    resultEl.innerHTML = numb1 + " * " + numb2 + " = " + (numb1 * numb2);
}

function divide() {
    setValues();
    resultEl.innerHTML = numb1 + " / " + numb2 + " = " + (numb1 / numb2);
}

function remainder() {
    setValues();
    resultEl.innerHTML = numb1 + " % " + numb2 + " = " + (numb1 % numb2);
}