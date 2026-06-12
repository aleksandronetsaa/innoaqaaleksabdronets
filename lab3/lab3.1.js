// ген емейла
function generateEmail(domain) {
    const randomNum = Math.floor(Math.random() * 100);
    return `test_user_${randomNum}@${domain}`;
}
// сохранение секрета
const maskPassword = function(password) {
    return '********';
};
// создание юзера
const createTestUser = (name, domain) => {
    const email = generateEmail(domain);
    const password = maskPassword('тут_любой_текст');
    return {
        userName: name,
        email: email,
        password: password
    };
};

console.log(createTestUser('QA_Ninja', 'gmail.com'));