// Напишите функцию `swap`, которая меняет местами ключи объекта и их значения.
// Аргумент у функции один— объект, чьи свойства нужно трансформировать.
// Для упрощения будем считать, что значения в объекте— это всегда различные примитивы.

function swap(obj) {
    const res = {};

    for (let key in obj) { //тут наверное доложен быль форыч
        obj[`${key}`] = res[`${value}`];
        obj[`${value}`] = res[`${key}`];

        // let key = obj[value];
        // res[key] = value;
    }

    // добавьте в res ключи и значения obj, поменяв их местами

    return res;
}

const myObj = {
    smile: '😃',
    kiss: '😚',
    smirk: '😏',
    disappointment: '😞',
    astonishment: '😲',
    dizziness: '😵'
};

console.log(myObj); // { first: 1, second: 2, third: 3 }
console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }