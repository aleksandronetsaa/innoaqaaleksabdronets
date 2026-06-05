// Исходные «грязные» данные
const rawFirstName = "  иВан  ";
const rawLastName = "  ПЕТРОВ  ";
const userAge = 25;
const isSubscribed = true;

// Очистка имени и фамилии (удаляем пробелы, приводим к нижнему регистру)
let cleanedFirstName = rawFirstName.trim().toLowerCase();
let cleanedLastName = rawLastName.trim().toLowerCase();

// Делаем первую букву имени заглавной
cleanedFirstName = cleanedFirstName[0].toUpperCase() + cleanedFirstName.slice(1);

// Аналогично для фамилии (если нужно по заданию — делаем)
cleanedLastName = cleanedLastName[0].toUpperCase() + cleanedLastName.slice(1);

// Генерация email (используем очищенные, но для email — строго нижний регистр)
const userEmail = `${cleanedFirstName.toLowerCase()}.${cleanedLastName.toLowerCase()}@qa-test.com`;

// Вывод результата
console.log(`=== User Profile ===
Name: ${cleanedFirstName}
Last Name: ${cleanedLastName}
Age: ${userAge}
Subscribed: ${isSubscribed}
Email: ${userEmail}
====================`);