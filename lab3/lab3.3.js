// функция "поиска" элемента
function waitForElement(elementName, attemptsLeft) {
    if (attemptsLeft === 0) {
        return `Ошибка: Элемент "${elementName}" не найден`;
    }
// рандомное появление "элемента"
    const isFound = Math.random() < 0.2;
    if (isFound) {
        return `Успех: Элемент "${elementName}" появился!`;
    }
// симуляция ожидания элемента
    console.log(`Ищем элемент "${elementName}"... Осталось попыток: ${attemptsLeft}`);
    return waitForElement(elementName, attemptsLeft - 1);
}

console.log(waitForElement('Кнопка оплаты', 5));