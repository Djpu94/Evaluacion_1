function suma(a, b) {
    return a + b
}

function sumaN() {
    let numbers = Array.from(arguments);
    let result = 0;
    numbers.forEach(num => result += num);
    return result;
}

function restar(a, b) {
    return a - b
}

function restarN() {
    let numbers = Array.from(arguments);
    let result = 0;
    numbers.forEach(num => result -= num);
    return result;
}

function multiplicacion(a, b) {
    return a * b
}

function multiplicacionN() {
    let numbers = Array.from(arguments);
    let result = 1;
    numbers.forEach(num => result *= num);
    return result;
}

function divicion(a, b) {
    return a / b
}

function divicionN() {
    let numbers = Array.from(arguments);
    let result = 1;
    numbers.forEach(num => result / num);
    return result;
}

console.log(suma(100, 99));
console.log(sumaN(100, 20, 3));

console.log(restar(20, 3));
console.log(restarN(1, 1, 1));

console.log(multiplicacion(20, 3));
console.log(multiplicacionN(1, 1, 1));

console.log(divicion(20, 3));
console.log(divicionN(2, 3));