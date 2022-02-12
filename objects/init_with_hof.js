function initWith(size, f) {
    let table = [];
    for (let i = 0; i < size; i++) {
        table.push(f(i))
    }
    return table
}
const withZero = () => 0;
const from42 = index => 42 + index;

const initWithZeros = initWith(3, withZero);
const initFrom = initWith(3, from42);

console.log(initWithZeros(3)); // [0, 0, 0]
console.log(initFrom(3, 42)); // [42, 43, 44]

