function createRetryCounter() {
    let attempts = 0;

    return function() {
        attempts++;
        return `Попытка запуска: ${attempts}`;
    };
}

const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();

console.log(loginRetry());
console.log(loginRetry());
console.log(loginRetry());


console.log(paymentRetry());
//  Задание со звездочкой
/*
переменная attempts живёт внутри функции, которая сохранена в loginRetry
пока не удалим loginRetry, её внутренняя память никуда не денется
*/