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
    // if (document.getElementById("boy") == checked) {
    //     const sex = "boy";
    // } else {
    //     const sex = "girl";
    // }
    const selected = document.querySelector('input[name="sex"]:checked').value;
    console.log(selected);
    const breed = document.getElementById("breed").value;
    const food = document.getElementById("food").value;

    // создаем нового кота:
    const specificcat = new Cat(ownername, petsname, breed, food);
    console.log(specificcat);

    // document.getElementById("plasefornewcat").innerHTML(specificcat);
    // document.getElementById("plasefornewcat").textContent = specificcat;
    // document.createElement("p").innerHTML(specificcat);

})