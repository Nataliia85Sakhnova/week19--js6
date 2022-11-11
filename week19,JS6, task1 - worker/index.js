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

// создаем переменные, вкладываем в них значение инпутов:
const namefromvalue = document.getElementById("name").value;
const surnamefromvalue = document.getElementById("surname").value;
const ratefromvalue = document.getElementById("rate").value;
const daysfromvalue = document.getElementById("days").value;

const worker = new Worker(namefromvalue, surnamefromvalue, ratefromvalue, daysfromvalue); //в какой момент оно должно запуститься

console.log(worker);

document.getElementById("button").addEventListener("click", () => {
    document.getElementById("salary").textContent = new Worker;
})