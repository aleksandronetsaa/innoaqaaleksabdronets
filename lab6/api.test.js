import { BASE_URL } from './config.js';
import checkResponse from './helpers.js';
import { assertEqual } from './helpers.js';


console.log('BASE_URL:', BASE_URL);
console.log(' Импорты работают!\n');


const getUser = async () => {
    try {
        console.log('📡 GET-запрос к:', `${BASE_URL}/users/2`);
        const response = await fetch(`${BASE_URL}/users/2`);

        const isSuccess = checkResponse(response);
        console.log(`Статус: ${response.status}, Успешно: ${isSuccess}`);

        if (isSuccess) {
            const data = await response.json();
            console.log(' Email пользователя:', data.data.email);

            assertEqual(
                data.data.email,
                'janet.weaver@reqres.in',
                'Проверка email пользователя'
            );

            return data;
        }
    } catch (error) {
        console.error(' Ошибка в getUser:', error.message);
    }
};


const getBrokenData = async () => {
    try {
        console.log('\n🔗 Запрос к битому эндпоинту...');
        const response = await fetch('https://reqres.in/api/users/23/сломанный_путь');
        console.log(`Статус: ${response.status}`);
        console.log('Попытка парсинга JSON...');

        const data = await response.json();
        console.log('Данные:', data);

    } catch (error) {
        console.log(' Тест не упал, но мы поймали ошибку:', error.message);
        console.log(' Тип ошибки:', error.name);
    }
};

// запуск
console.log(' Запуск тестов\n' + '='.repeat(50));
await getUser();
await getBrokenData();
console.log('\n' + '='.repeat(50) + '\n Все тесты выполнены!');