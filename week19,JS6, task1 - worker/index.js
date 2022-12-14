// Создайте класс Работник, который будет иметь следующие свойства:
//     name(имя), surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days.

class Worker {

    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    static getSalary(rate, days) {
        return rate * days;
    }
}

document.getElementById("button").addEventListener("click", () => {

    //проверка инпута на пустоту:
    const isEmpty = (input) => {
        if (input == '') {
            document.getElementById("alarm").textContent = "Пожалуйста, заполните все поля!";

        }
    }

    // создаем переменные, вкладываем в них значение инпутов:
    const namefromvalue = document.getElementById("name").value;
    const surnamefromvalue = document.getElementById("surname").value;
    const ratefromvalue = document.getElementById("rate").value;
    const daysfromvalue = document.getElementById("days").value;

    isEmpty(namefromvalue);
    isEmpty(surnamefromvalue);
    isEmpty(ratefromvalue);
    isEmpty(daysfromvalue);

    const worker = new Worker(namefromvalue, surnamefromvalue, ratefromvalue, daysfromvalue);
    console.log(worker);

    if (ratefromvalue * daysfromvalue == '' | 0) {
        document.getElementById("salary").textContent = '';
    } else {
        document.getElementById("salary").textContent = String(ratefromvalue * daysfromvalue) + " евро";
        document.getElementById("alarm").textContent = '';
    }
})