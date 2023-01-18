// Напишите функцию `swap`, которая меняет местами ключи объекта и их значения.
// Аргумент у функции один— объект, чьи свойства нужно трансформировать.
// Для упрощения будем считать, что значения в объекте— это всегда различные примитивы.

function swap(obj) {
    const res = {};

    for (let key in obj) {
        // console.log(key); // smile (ключ!)
        // console.log(res[key]); // undefined (значение!)
        // res[key] = myObj[key]; // создаем ключ smile в объекте res, кладем в него значение '😃' ключа smile из объекта myObj
        // console.log(myObj[key]);

        res[key] = obj[key];
        console.log(key); //smile
        console.log(obj[key]); // 😃
        console.log(res[key]); //smile
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


//     for (let key in obj) {
//         obj[`${key}`] = res.key {};
//         console.log(res.key.value);
//         // obj[`${key}`].value = res[`${key}`];

//         // как в объекте объявить ключ и присоединить к нему значение:
//         // res[`${key}`] = true;
//         // res.key = [`${value}`];

//     // добавьте в res ключи и значения obj, поменяв их местами

//     return res;
// }

// const res = {
//     "s": "h",
// };
// let x;
// x = 3;


// for (let key in myObj) {
//     console.log(key); // smile (ключ!)
//     console.log(res[key]); // undefined (значение!)
//     res[key] = myObj[key]; // создаем ключ smile в объекте res, кладем в него значение '😃' ключа smile из объекта myObj
//     console.log(myObj[key]);
//     console.log(res[key]);
// };

// console.log(myObj[`smirk`]);
//как вывести ключ
// myObj 
// res

// как вывести значение ключа
// myObj 
// res


// console.log(res);


// console.log(myObj.smile);

// console.log(myObj); // { first: 1, second: 2, third: 3 }
// console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }