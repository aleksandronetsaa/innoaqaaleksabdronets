// "тест ран"
const testResults = [
    { id: 1, name: 'Login Test', status: 'passed', time: 120 },
    { id: 2, name: 'Payment Test', status: 'failed', time: 300 },
    { id: 3, name: 'Profile Test', status: 'passed', time: 90 },
    { id: 4, name: 'Cart Test', status: 'skipped', time: 10 }
];

// фильтр
const failedTests = testResults.filter(test => test.status === 'failed');

// получаем успешные тесты
const passedTestIds = testResults
    .filter(test => test.status === 'passed')
    .map(test => test.id);

// каунтер времени
const totalExecutionTime = testResults.reduce((sum, test) => sum + test.time, 0);

// логи результатов
console.log('Failed tests:', failedTests);
console.log('Passed test IDs:', passedTestIds);
console.log('Total execution time:', totalExecutionTime);