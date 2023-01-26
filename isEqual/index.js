// Напишите функцию isEqual, которая сравнивает два объекта по свойствам и значениям.
// Если наборы ключей со значениями обоих объектов совпадают, функция должна вернуть true, иначе— false.
// Получите массив ключей каждого из двух объектов вызовом метода Object.keys
// и сравните массивы, применяя метод every и оператор ===.

// функция:
//     сравнить массив ключей || сравнить массив значений
// return

function isEqual(firstObj, secondObj) {

    const arr1 = Object.entries(firstObj); //получаем целиковый 1й массив
    const arr2 = Object.entries(secondObj); //получаем целиковый 2й массив

    console.log(arr1);
    console.log(arr2);

    const result = JSON.stringify(arr1) === JSON.stringify(arr2);
    // const result = _.isEqual(arr1, arr2); // или так
    console.log(result);
    return result;

    // Object.keys
    // every
    // ===

    // const areArrSame = (a, b) => {
    //     a.every((n, i) => {
    //         n === b[i];
    //         console.log(n);
    //         return (n === b[i]);
    //     });
    // }
    // const areAllBallsAreGreen = balls.every((ball, index, arr) => ball === '🎾')// true
}

const first = {
    property: 'value',
    anotherProperty: 'another value'
};

const second = {
    property: 'value',
    anotherProperty: 'another value'
};

const third = {
    property: 'value',
    anotherProperty: 'one more value'
};

console.log(isEqual(first, second)); // true
console.log(isEqual(second, third)); // false