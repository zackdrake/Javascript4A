const partial = (f, arg1) => (arg2, arg3) => f(arg1, arg2, arg3);

const f = (x, y, z) => x * (y - z);
console.log(partial(f, 2)(3, 4)) // => -2   <=> (2 * (3 - 4))