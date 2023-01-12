const welcomeMessages = {
    russian: 'Добро пожаловать',
    english: 'Welcome',
    french: 'Bienvenue',
    italian: 'Benvenuto',
    spanish: 'bienvenido',
    chinese: '歡迎',
    finnish: 'Tervetuloa'
};

console.log(welcomeMessages);

function deleteWelcomeMessages(propsArr) { //`propsArr` — массив ключей, которые нужно удалить из объекта
    // arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
    // arr.slice([start], [end])
    // delete propsArr;
    // Напоминаем, что проход по массиву выполняется методом `forEach()`
    // const fruits = ["apple", "orange", "cherry"];
    // fruits.forEach(myFunction);
    // массив.forEach(function (элемент, индекс, массив) {
    //     код, который выполнится для всех элементов
    // })
    propsArr.forEach(function (item) {
        delete welcomeMessages[item];
    });

}

deleteWelcomeMessages(['italian', 'french']);

console.log(welcomeMessages);

// Теперь итальянский и французский переводы удалены:

// { 
//   russian: 'Добро пожаловать',
//   english: 'Welcome',
//   spanish: 'bienvenido',
//   chinese: '歡迎',
//   finnish: 'Tervetuloa'
// }

// Создайте функцию `deleteWelcomeMessages`,
// которая принимает на вход один аргумент — `propsArr` — массив ключей, которые нужно удалить из объекта.
// Напоминаем, что проход по массиву выполняется методом `forEach()`