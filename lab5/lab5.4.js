
class BasePage {
    static environment = 'QA';

    open(url) {
        console.log(`Открываю страницу: ${url} на окружении ${this.constructor.environment}`);
    }
}

class LoginPage extends BasePage {
    loginInput = '#user';

    #passwordInput = '#pass';

    constructor() {
        super();
        console.log('🔐 LoginPage инициализирована');
    }

    fillForm(user, password) {
        console.log(`Вводим логин ${user} в поле ${this.loginInput}`);

        console.log(`Вводим пароль ${password} в поле ${this.#passwordInput}`);
    }
}

const page = new LoginPage();


page.open('https://test.com/login');

page.fillForm('admin', '12345');

try {
    console.log(page.#passwordInput);
} catch (error) {
    console.log('✅ Ошибка доступа к приватному полю:', error.message);
}

console.log('Окружение из класса:', LoginPage.environment);
console.log('Окружение из экземпляра:', page.constructor.environment);


console.log('page instanceof LoginPage:', page instanceof LoginPage);
console.log('page instanceof BasePage:', page instanceof BasePage);