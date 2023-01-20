// Напишите функцию isEqual, которая сравнивает два объекта по свойствам и значениям.
// Если наборы ключей со значениями обоих объектов совпадают, функция должна вернуть true, иначе— false.
// Получите массив ключей каждого из двух объектов вызовом метода Object.keys
// и сравните массивы, применяя метод every и оператор ===.

// функция:
//     сравнить массив ключей || сравнить массив значений
// return

function isEqual(firstObj, secondObj) {
    // const arrKeys1 = Object.keys(firstObj); //массив ключей 1
    // const arrValues1 = //массив значений 1
    //     const arrKeys2 = Object.keys(secondObj); //массив ключей 2
    // const arrValues1 = //массив значений 2

    //     let match = true;

    const arr1 = Object.entries(firstObj);
    const arr2 = Object.entries(secondObj);

    console.log(arr1);
    console.log(arr2);

    const result = arr1 === arr2;
    console.log(result);
    return result;


    // const areArrSame = (a, b) => {
    //     a.every((n, i) => {
    //         n === b[i];
    //         console.log(n);
    //         return (n === b[i]);
    //     });
    // }
    // console.log(areArrSame(arr1, arr2));
    // return;
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