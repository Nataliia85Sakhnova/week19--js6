// Создайте класс Работник, который будет иметь следующие свойства:
//     name(имя), surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days.

class Worker {

    constructor(name1, surname, rate, days) {
        this.name1 = name1;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    static getSalary(rate, days) {
        return rate * days;
    }
}

const worker = new Worker("Jukka", "Pekka", 150, 20);

console.log(worker.name1);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

document.createElement("p").textContent = new Worker;





// const person {
//     name = Valera,
//         age = 23
// }

// let city = person.city
// city = "Amsterdam"

// console.log(person);