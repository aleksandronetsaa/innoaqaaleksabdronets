const bugReport = { id: 104, title: 'Button crash', severity: 'High', status: 'Open' };

// в одну строку извлекаем id, а остальное упаковываем в bugDetails
const { id, ...bugDetails } = bugReport;

console.log('ID:', id);
console.log('Bug details:', bugDetails);
