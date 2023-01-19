// Напишите функцию `swap`, которая меняет местами ключи объекта и их значения.
// Аргумент у функции один— объект, чьи свойства нужно трансформировать.
// Для упрощения будем считать, что значения в объекте— это всегда различные примитивы.

function swap(obj) {
    const res = {};

    for (let key in obj) {
        res[key] = obj[key];
        // const value = obj[key];
        res[obj[key]] = key;
        // res[value] = key; // значение ключа объекта res = key; ???????????????
        // console.log(res[value]); //smile
        // console.log(res[key]); //😃
        // console.log(key); //smile
        // console.log(obj[key]); //😃
        console.log(res)
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