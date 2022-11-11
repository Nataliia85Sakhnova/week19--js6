// Помните наше практическое задание с опросником для владельцев котиков?
// Он нам снова пригодится!
// Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.),
// и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника.
// В этом классе будут только свойства и конструктор, без методов. 
// Выведите результат (заполненный объект класса Cat) в консоль при помощи console.log.


class Cat {
    constructor(ownername, catname, breed, food, sex) {
        this.ownername = ownername;
        this.catname = catname;
        this.sex = sex;
        this.breed = breed;
        this.food = food;
    }
}


// создаем кнопку, и в нее вкладыаем вот это вот все:
document.getElementById("button").addEventListener("click", () => {

    // создаем переменные, вкладываем в них значение инпутов:
    const ownername = document.getElementById("ownername").value;
    const petsname = document.getElementById("petsname").value;
    const sex = document.getElementById("sex").value; //как сделать с радиокнопкой?
    const breed = document.getElementById("breed").value;
    const food = document.getElementById("food").value;

    // создаем нового кота:
    const specificcat = new Cat(ownername, petsname, sex, breed, food);

    document.getElementById("plasefornewcat").innerHTML(specificcat);

})

// console.log(specificcat);