// Напишите функцию isEqual, которая сравнивает два объекта по свойствам и значениям.
// Если наборы ключей со значениями обоих объектов совпадают, функция должна вернуть true, иначе— false.

// Получите массив ключей каждого из двух объектов вызовом метода Object.keys
// и сравните массивы, применяя метод every и оператор ===.

function isEqual(firstObj, secondObj) {
    const arr1 = Object.keys(firstObj);
    const arr2 = Object.keys(secondObj);

    console.log(arr1);
    console.log(arr2);


    const areArrSame = (a, b) => a.length === b.length && a.every((n, i) => n === b[i]);
    console.log(areArrSame(arr1, arr2));


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

isEqual(first, second); // true
isEqual(second, third); // false