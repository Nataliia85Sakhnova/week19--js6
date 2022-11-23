// Реализуйте класс `Валидатор`, который будет проверять строки.
// К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет.Если является - возвращает true, если не является - то false.
// Кроме того, класс будет иметь следующие методы:
// метод `isDomain` для проверки домена,
// метод `isDate` для проверки даты
// метод `isPhone` для проверки телефона.

// Сделайте 2 версии этого класса - стандартную и статическую.

//словарик:

const buttonNormal = document.getElementById("buttonNormal");
const buttonStatic = document.getElementById("buttonStatic");

let Validator = {
    email: document.getElementById("Email").value,
    domain: document.getElementById("Domain").value,
    dateOf: document.getElementById("Date").value,
    phone: document.getElementById("Phone").value,
    regexpEmail: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    regexpDomain: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    regexpDate: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    regexpPhone: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,

    isEmail: () => {
        if (email.match(regexpEmail)) {
            document.getElementById("name").textContent = email; //???
        } else {
            document.getElementById("alarm").textContent = "Проверь написание Email";
        };


        isDomain: () => {}
        isDate: () => {}
        isPhone: () => {}
    };
};













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
    var validator = new Validator();
    console.log(validator.isEmail(email));
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