//  Напишите функцию `copy`, которая будет принимать на вход объект, копировать его и возвращать новый.
//  Этот новый объект должен обладать тем же самым набором методов и свойств, но быть независимым.
//  То есть: при изменении исходного объекта его копия должна остаться прежней.
//  Небольшая подсказка: при создании объекта - копии вам поможет метод `Object.keys()`.

function copy(obj) {
    // ДУМАЕМ СЕЙЧАС СЮДА:
    const newObj = Object.assign({}, obj);
    // Этот код скопировал все свойства объекта firstObj в пустой объект.
    // После копирования ссылка на новый объект была записана в переменную newObj. 
    console.log(newObj === obj); // false
    // напишите свой код здесь
}

const firstObj = {
    one: 1,
    two: 2,
    three: 3
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

// console.log(firstObj); // { one: 1, two: 2, three: 3 }
// console.log(secondObj); // { one: 1, two: 2, three: 3 }
// console.log(thirdObj); // { one: 1, two: 2, three: 3 }

// firstObj.four = 4;

// console.log(firstObj); // { one: 1, two: 2, three: 3, four: 4 }
// console.log(secondObj); // { one: 1, two: 2, three: 3, four: 4 }// thirdObj не изменился
// console.log(thirdObj); // { one: 1, two: 2, three: 3 }