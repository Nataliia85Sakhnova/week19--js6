// Напишите функцию `compare` для сравнения двух объектов по ссылке.
// Если передать функции две ссылки на один и тот же объект, она должна возвращать `true`, иначе— `false`.

function compare(firstObj, secondObj) {
    firstObj === secondObj;
    console.log(firstObj === secondObj);
    // напишите ваш код здесь
}

const first = {
    property: 'value'
};

const second = {
    property: 'value'
};

const third = second;

compare(first, second); // false
compare(second, third); // true