// стрелочная функция с Rest-параметром
const logLocators = (...locators) => {
    console.log(`Готовы к работе: ${locators.length} локаторов. Список: [${locators}]`);
};

logLocators('.btn-login', '#password', '[name="submit"]');
