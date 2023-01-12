const phonebook = {
    'Тёма': {
        mobile: '+79995164420',
        work: '+79569172374',
        home: '+78123552223'
    },
    'Вася брат Андрея': {
        mobile: '+79045174415'
    },
    'Анастасия Павловна': {
        work: '+79569172374'
    }
};

// const cat = {
//     breed: 'сиамская',
//     eyeСolor: 'blue'
// }

// cat['age'] = 89;
// console.log(cat);

function addPhoneNumber(name, numberType, number) {
    // if (name in phonebook) {
    //     phonebook[`${name}`][`${numberType}`] = number;
    // } else {
    //     phonebook[`${name}`] = {};
    //     phonebook[`${name}`][`${numberType}`] = number;
    // }

    console.log(!(name in phonebook));

    if (!(name in phonebook)) {
        phonebook[`${name}`] = {};
    }
    phonebook[`${name}`][`${numberType}`] = number;

    // напишите ваш код здесь
}

// когда функция будет готова, добавьте мобильный Анастасии Павловны
addPhoneNumber('Анастасия Павловна', 'mobile', '+79111545616');

console.log(phonebook['Анастасия Павловна'].mobile); // "+79111545616"

console.log(phonebook);


//   Напишите функцию `addPhoneNumber(name, numberType, number)`,
//     которая умеет добавлять номера в телефонную книгу
// Сама книга представляет собой объект, который хранится в переменной `phonebook`.

// Ваша функция должна принимать три аргумента:

//     -имя контакта— `name`; -
// тип номера— `numberType`; -
// номер `number`.

// Обратите внимание, что одному человеку может быть присвоено несколько номеров:

//     -мобильный— `mobile`; -
// рабочий— `work`; -
// домашний— `home`.

// Учтите это при проектировании функции.