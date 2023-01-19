// Напишите функцию `swap`, которая меняет местами ключи объекта и их значения.
// Аргумент у функции один— объект, чьи свойства нужно трансформировать.
// Для упрощения будем считать, что значения в объекте— это всегда различные примитивы.

function swap(obj) {
    const res = {};

    for (let key in obj) {
        res[key] = obj[key];
        // res[value] = key; // значение ключа объекта res = key; ??????????????? 
        console.log(res[key]); //😃
        console.log(key); //smile
        console.log(obj[key]); //😃
    };
}

const myObj = {
    smile: '😃',
    kiss: '😚',
    smirk: '😏',
    disappointment: '😞',
    astonishment: '😲',
    dizziness: '😵'
};

swap(myObj);