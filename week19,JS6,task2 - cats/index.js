// Помните наше практическое задание с опросником для владельцев котиков?
// Он нам снова пригодится!
// Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.),
// и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника.
// В этом классе будут только свойства и конструктор, без методов. 
// Выведите результат (заполненный объект класса Cat) в консоль при помощи console.log.


class Cat {
    constructor(ownername, catname, breed, food) {
        this.ownername = ownername;
        this.catname = catname;
        // this.sex = sex;
        this.breed = breed;
        this.food = food;
    }
}


// создаем кнопку:
document.getElementById("button").addEventListener("click", () => {

    // создаем переменные, вкладываем в них значение инпутов:
    const ownername = document.getElementById("ownername").value;
    const petsname = document.getElementById("petsname").value;
    // const sex = document.getElementById("sex").value; //как сделать с радиокнопкой?
    const breed = document.getElementById("breed").value;
    const food = document.getElementById("food").value;

    // создаем нового кота:
    const specificcat = new Cat(ownername, petsname, breed, food);
    console.log(specificcat);

    // document.getElementById("plasefornewcat").innerHTML(specificcat); - думаю что надо так, но не работает

    const cat_container = document.createElement("p"); //тоже не работает, но хоть не ругается
    cat_container.textContent = specificcat;

})