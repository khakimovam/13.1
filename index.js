// Сделайте простой калькулятор на 4 действия (сложение, вычитание, деление, умножение). 4 кнопки, по нажатию которые запрашиваются два числа и выдается результат их вычисления, соответствующий действию на кнопке.


// Сложение
function addition() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    let result = (Number(number1) + Number(number2));
    document.getElementById("out").innerHTML = result;
}

// Вычитание
function subtract() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    let result = (Number(number1) - Number(number2));
    document.getElementById("out").innerHTML = result;
}

// Умножение
function multiply() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    let result = (Number(number1) * Number(number2));
    document.getElementById("out").innerHTML = result;
}
// Деление
function divide() {
    let number1 = document.getElementById("number1").value;
    number1 = parseInt(number1);

    let number2 = document.getElementById("number2").value;
    number2 = parseInt(number2);

    let result = (Number(number1) / Number(number2));
    document.getElementById("out").innerHTML = result;
}