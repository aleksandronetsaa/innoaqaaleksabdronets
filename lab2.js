//Raw данные
const room = 'kitchen';
const timeOfDay = 20;
let sensorTemp = null;
//Восстановление данных
let currentTemp = sensorTemp ?? 22;
//Свет
let isLightOn = timeOfDay >= 18 || timeOfDay < 6 ? true : false;
//Климат
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