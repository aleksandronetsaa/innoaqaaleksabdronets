//Raw данные
const room = 'kitchen';
const timeOfDay = 20;
const sensorTemp = null;
//Восстановление данных
let currentTemp = sensorTemp ?? 22;
//Свет
let isLightOn = timeOfDay >= 18 || timeOfDay < 6 ? true : false;
//Switch климат
switch (room) {
    case 'bedroom':
        console.log(`Спальня: Свет ${isLightOn ? "включен" : "выключен"}, Температура ${currentTemp}`);
        break;
    case 'kitchen':
        console.log(`Кухня: Работает вытяжка. Свет ${isLightOn ? "включен" : "выключен"}`);
        break;
    default:
        console.log("Неизвестная комната");
}

// Доп задание - "И" первым смотрит выражение слева, если оно true,то выводится выражение справа
// Если выражение слева становится false и в консоль не выводится ничего
let room = 'be2droom';
room === 'bedroom' && console.log("Увлажнитель воздуха включен");