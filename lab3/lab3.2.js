// создание счётчика
function createRetryCounter() {
    let attempts = 0;
// функционал счётчика
    return function() {
        attempts++;
        return `Попытка запуска: ${attempts}`;
    };
}
// создание двух разных каунтеров
const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();
// вызов первого
console.log(loginRetry());
console.log(loginRetry());
console.log(loginRetry());
// вызов второго
console.log(paymentRetry());
//  Задание со звездочкой
/*
переменная attempts живёт внутри функции, которая сохранена в loginRetry
пока не удалим loginRetry, её внутренняя память никуда не денется
*/