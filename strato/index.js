// Есть объект `heights`
// с десяткой самых высоких зданий мира.Ключи этого объекта— названия зданий,
// а значения— высоты в метрах.Выясните, достигнет ли суммарная высота этих построек стратосферы.


const heights = {
    burjKhalifa: 828,
    tokyoSkyTree: 634,
    shanghaiTower: 632,
    abrajAlBait: 601,
    cantonTower: 600,
    pingAnFinanceCentre: 600,
    lotteWorldTower: 555,
    cnTower: 553,
    oneWorldTradeCenter: 541,
    ostankinoTower: 540
};

const stratoHeight = 11000;

console.log(heights.ostankinoTower);

let sum = 0;

for (let hi in heights) {
    console.log(heights[hi]);
    sum += heights[hi];
}
console.log(sum);
// в объектке значения ключей перебрать и сложить
const sumHeights = sum;
// напишите ваш код здесь
console.log(sumHeights >= stratoHeight);

// Стратосфера располагается на высоте от 11 до 50 километров.
// Мы сохранили высоту её нижней границы в переменной `stratoHeight`.