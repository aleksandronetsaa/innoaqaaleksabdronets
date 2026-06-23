const fwConfig = {
    _timeout: 5000,

    set timeout(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Некорректный таймаут');
        }
        this._timeout = value;
    },

    get timeout() {
        return `Текущий таймаут: ${this._timeout} мс`;
    }
};

console.log(fwConfig.timeout);

try {
    fwConfig.timeout = -10;
} catch (error) {
    console.log('Ошибка при установке -10:', error.message);
}

fwConfig.timeout = 10000;
console.log(fwConfig.timeout);

console.log('_timeout:', fwConfig._timeout);