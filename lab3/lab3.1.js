function generateEmail(domain) {
    const randomNum = Math.floor(Math.random() * 100);
    return `test_user_${randomNum}@${domain}`;
}

const maskPassword = function(password) {
    return '********';
};

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