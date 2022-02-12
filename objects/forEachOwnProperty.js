function forEachOwnProperty(prop) {
    for (var p in obj) {
        string += p + ': "' + obj[p] + '" ';
    }
}

const o1 = { a: 1 };
const o2 = Object.create(o1);
o2.b = 2;
o2.c = 3;

const props = [];
o2.forEachOwnProperty(prop => props.push(prop));
props; // => ["b", "c"]; mais pas "a"