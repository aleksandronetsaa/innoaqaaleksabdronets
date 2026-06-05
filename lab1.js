// Исходные данные
const FirstName = "  иВан  ";
const LastName = "  ПЕТРОВ  ";
const userAge = 25;
const isSubscribed = true;

// Очистка имени и фамилии
let cleanedFirstName = FirstName.trim().toLowerCase();
let cleanedLastName = LastName.trim().toLowerCase();

// Делаем первую букву имени заглавной
cleanedFirstName = cleanedFirstName[0].toUpperCase() + cleanedFirstName.slice(1);

// Делаем первую букву фамилии заглавной
cleanedLastName = cleanedLastName[0].toUpperCase() + cleanedLastName.slice(1);

// Генерация email
const userEmail = `${cleanedFirstName.toLowerCase()}.${cleanedLastName.toLowerCase()}@qa-test.com`;

// Вывод результата
console.log(`=== User Profile ===
Name: ${cleanedFirstName}
Last Name: ${cleanedLastName}
Age: ${userAge}
Subscribed: ${isSubscribed}
Email: ${userEmail}
====================`);