// Напишите функцию `swap`, которая меняет местами ключи объекта и их значения.
// Аргумент у функции один— объект, чьи свойства нужно трансформировать.
// Для упрощения будем считать, что значения в объекте— это всегда различные примитивы.

function swap(obj) {
    const res = {};

    for (let key in obj) {
        res[obj[key]] = key;
    };
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

result = swap(myObj);
console.log(result);
document.createElement('div').innerHTML = result;