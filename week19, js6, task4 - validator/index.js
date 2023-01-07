// Реализуйте класс `Валидатор`, который будет проверять строки.
// К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет.Если является - возвращает true, если не является - то false.
// Кроме того, класс будет иметь следующие методы:
// метод `isDomain` для проверки домена,
// метод `isDate` для проверки даты
// метод `isPhone` для проверки телефона.

// Сделайте 2 версии этого класса - стандартную и статическую.

// Функция == метод
// Объект == экземпляр
// Свойство == поле

//словарик:
const buttonNormal = document.getElementById("buttonNormal");
const buttonStatic = document.getElementById("buttonStatic");

class Validator {

    constructor(email, domain, dateof, phone) {
        this.email = email;
        this.domain = domain;
        this.dateof = dateof;
        this.phone = phone;
        this._regexpEmail = /@/;
        this._regexpDomain = /^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/;
    }

    // 

    isEmail() {
        console.log(this.email.match(this._regexpEmail));
        if (this.email.match(this._regexpEmail)) {
            document.getElementById("email").textContent = this.email; //???
        } else {
            document.getElementById("alarm").textContent = "Проверь написание Email";
        }
    }

    isDomain() {
        console.log(this.domain.match(this._regexpDomain));
        if (this.email.match(this._regexpEmail)) {
            document.getElementById("email").textContent = this.domain; //???
        } else {
            document.getElementById("alarm").textContent = "Проверь написание Domain";
        }
    }
}



//     isDate() {}
//     isPhone() {}

class ValidatorStatic {

    // static compare(articleA, articleB) {
    //     return articleA.date - articleB.date;
    //   }

    static isEmail() {};
    static isDomain() {};
    static isDate() {};
    static isPhone() {};
}

buttonNormal.addEventListener("click", () => { //вынесенно в функцию для отсрачки события
    //стандартная вызывается вот так
    const userEmail = document.getElementById("Email").value;
    const userDomain = document.getElementById("Domain").value;
    const userDateOf = document.getElementById("Date").value;
    const userPhone = document.getElementById("Phone").value;

    var validator = new Validator(userEmail, userDomain, userDateOf, userPhone);
    console.log(validator);
    validator.isEmail();

    // console.log(validator.isDomain(domen));
    // console.log(validator.isDate(date));
    // console.log(validator.isPhone(phone));
})

buttonStatic.addEventListener("click", () => { //вынесенно в функцию для отсрачки события
    //а статическая так
    console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
    console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
    console.log(ValidatorStatic.isDate('12.05.2021'));
    console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
})


// класс — это шаблон, описывающий свойства и методы, которыми будет обладать любой объект, созданный на основе этого класса.
// Когда мы создаем объект на основе существующего класса, обязательно надо использовать слово new и имя класса.