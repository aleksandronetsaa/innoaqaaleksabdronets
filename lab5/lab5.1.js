// клик
const baseElement = {
    click() {
        console.log('Клик по элементу');
    }
};

// loginButton
const loginButton = {
    locator: '#login',
    text: 'Войти'
};

// прототип
loginButton.__proto__ = baseElement;

// вызываем унаследованный метод
loginButton.click();

// проверяем, что метод унаследован
console.log('Метод click в loginButton?', 'click' in loginButton);
console.log('Свойства loginButton:', Object.keys(loginButton)); 