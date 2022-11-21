// Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление.
// Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.



const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
const buttonMulti = document.getElementById("multi");
const buttonDivide = document.getElementById("divide");
const paragraf = document.getElementById("result");

class Calculator {
    static plus(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        return (Number(x) + Number(y))
    }

    static minus(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        return (Number(x) - Number(y))
    }

    static multi(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        return (Number(x) * Number(y))
    }

    static divide(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        if (isNaN(y)) {
            alert("Это не число!")
            return
        } else if (!Number(y)) {
            alert("На 0 делить нельзя!")
            return
        }

        return (Number(x) / Number(y))
    }

    static showResult(answer) {
        const string = JSON.stringify(answer);
        console.log(string);
        paragraf.innerHTML = string; //вписывает в абзац
    }

    // static writing(button, method) {
    //     button.addEventListener("click", method);

    // }
}

buttonPlus.addEventListener("click", () => { //вынесенно в функцию для отсрачки события
    Calculator.showResult(Calculator.plus())
})

buttonMinus.addEventListener("click", () => {
    Calculator.showResult(Calculator.minus())
})

buttonMulti.addEventListener("click", () => {
    Calculator.showResult(Calculator.multi())
})

buttonDivide.addEventListener("click", () => {
    Calculator.showResult(Calculator.divide())
})

// Calculator.writing(buttonPlus, Calculator.showResult(Calculator.plus()))

// document.addEventListener(buttonPlus, Calculator.plus());

// Calculation(buttonPlus, Calculator.plus);
// Calculation(buttonMinus, Calculator.minus);
// Calculation(buttonMulti, Calculator.multi);
// Calculation(buttonDivide, Calculator.divide);