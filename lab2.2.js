// Стартовые значения
let energy = 10;
let depth = 0;
let gold = 0;
// Цикл копания
while (energy > 0) {
    depth++;
    energy--;

    if (depth % 3 === 0) {
        gold++;
    }
    console.log(`Глубина: ${depth}м. Энергия: ${energy}. Золото: ${gold}`);

    if (depth === 7) {
        console.log(`Монстр! Гном в панике убегает!`);
        break;
    }
}
//Итог цикла копания
console.log(`Смена окончена. Итоговая глубина: ${depth}, добыто золота: ${gold}`);