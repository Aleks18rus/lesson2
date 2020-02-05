//if (2*4 ==8) {
//  console.log('Верно!');
//} else {
//    console.log('Неверно');
//}
//let num = 50;
//if (num < 49) {
//    console.log('Неверно')
//} else if (num > 100) {
//    console.log('Многовато')
//} else {
//    console.log('Это верно!')
//}
//
//(num == 50) ? console.log('Верно!'): console.log('Неверно');
//
//switch (num) {
//    case num < 49:
//        console.log('Неверно');
//        break;
//    case num > 100:
//        console.log('Многовато');
//        break;
//    case num > 80:
//        console.log('все еще много');
//        break;
//    case 50:
//        console.log('верно!');
//        break;
//    default:
//        console.log('что-то пошло нет так');
//        break;
//}
//let num = 50;
//while (num < 55) {
//    console.log(num);
//    num++;
//}
//do {
//    console.log(num);
//    num++;
//}
//while (num < 55);
//
//for (let i = 1; i < 8; i++) {
//    if (i == 6) {
//        break;
//    }
//    console.log(i);
//}

'use strict';
let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' & b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        console.log('bad results');
        i--;
    }
};

appData.moneyPerday = appData.budget / 30;

alert('ежедневный бюджет:' + appData.moneyPerday);
if (appData.moneyPerday < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
    console.log('средний уровень достатка');
} else if (appData.moneyPerday > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка..');
}
