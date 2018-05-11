// Присваивание. Задачи

let a = 10,
    b = 10,
    c = 10,
    z = 10,
    x = 10,
    i = 10,
    y = 10;

a +=10;
b *=18;
c -=10;
x +=a;
y *=z;
i *=5 * y;

// квадрат числа
a *=a;

// Условные операторы. Задачи
// задача № 1
let state = "hidden";
if (state === "hidden") {
    state = "visible";
} else {
    state = "hidden";
};

state === "hidden" ? state = "visible" : state = "hidden";



// задана № 2
let someValue = 4; // лучше конечно через let someValue = +prompt('Введите число')
if (someValue === 0) {
    someValue = 1;
} else if (someValue < 0) {
    someValue = "less then zero";
} else {
    someValue *=10;
};

someValue === 0 ? someValue = 1 :
                  someValue < 0 ? someValue = "less then zero" : someValue *=10;

// switch задачи
let A = 'inline';
switch(A) {
    case 'block': console.log('block');
    break;
    case 'none': console.log('none');
    break;
    case 'inline': console.log('inline');
    break;
    default: console.log('other');
};

// Преобразования типов. Задачи
let a1 = 0 || 'string'; // вернется 'string' потому что 0 это false, а любая строка (кроме пустой) true и оператор или запинается на правде и возвращает её

let a2 = 0 & 'string;'; // вернется 0 потому что оператор или запинается на лжи

let a3 = null || 25; // вернется 25 так как null преобразуется в false, a число в true

let a4 = null & 25; // вернется 0 так как null он преобразуетя в 0, а 0 в свою очередь в false

let a5 = null || 0 || 35; // вернется 35, null преобразуется в false, 0 тоже false, 35 true

let a6 = null & 0 & 35; // вернется 0 который преобразовался из null так как это false


let value;
value = 12 + 14 + '12'; // '2612' - проведется сложение чисел а потом число 26 приведется к строке и произойдет конкатенация строк '26' и '12'

value = 3 + 2 - '1'; // 4 - так как при вычитании '1' превратится в число 1

value = '3' + 2 -1; // 31 - так как сначала из-за оператора сложения произойдет конкатенация строк '3' и '2' потом из-за оператора вичитания строка '32' превратится в число 32 из которого вычтется 1

value = true + 2; // 3 - true преобразуется в 1 и произойдет сложение

value = +'10' + 1; // 11 - оператор + перед строкой превратит её в число 10 и потом произойдет сложение

value = undefined + 2; // NaN - undefined преобразуетя в NaN

value = null + 5; // 5 - null преобразуется в 0 и произойдет сложение

value = true + undefined; //NaN - undefined преобразуетя в NaN

console.log(value);
