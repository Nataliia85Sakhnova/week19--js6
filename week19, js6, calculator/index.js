// Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление.
// Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.


class Calculator {
    static plus(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        showResult(Number(x) + Number(y))
        console.log(document.getElementById("result").innerHTML)
    }

    static minus(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        showResult(Number(x) - Number(y))
    }

    static multi(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        showResult(Number(x) * Number(y))
    }

    static divide(inputs) {
        let x = document.getElementById("number1").value;
        let y = document.getElementById("number2").value;
        console.log(typeof y);
        if (isNaN(y)) {
            alert("Это не число!")
            return
        } else if (!Number(y)) {
            alert("На 0 делить нельзя!")
            return
        }
        showResult(Number(x) / Number(y))
    }
}

const showResult = (answer) => {
    document.getElementById("result").innerHTML = `Ваш результат ${answer}`
}

Calculator.plus.addEventListener("click", Plus);
Calculator.minus.addEventListener("click", Minus);
Calculator.multi.addEventListener("click", Multi);
Calculator.divide.addEventListener("click", Divide);