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

