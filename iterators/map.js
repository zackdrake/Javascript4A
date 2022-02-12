function map(iterable, f) {

    return iterable
}

function getSequenceIterable(from, to) {
    return {
        [Symbol.iterator]: () => ({
            next() {
                return {
                    done: from > to,
                    value: from++,
                };
            }
        })
    };
}

const helloIterable = map("hello", v => v.toUpperCase());
const iterator = helloIterable[Symbol.iterator]();
assert.strictEqual(iterator.next().value, "H");
assert.strictEqual(iterator.next().value, "E");
assert.strictEqual(iterator.next().value, "L");
assert.strictEqual(iterator.next().value, "L");
assert.strictEqual(iterator.next().value, "O");
assert.strictEqual(iterator.next().done, true);

const myIterable = getSequenceIterable(4, 8);
assert.deepEqual([...map(myIterable, x => x * 2)], [8, 10, 12, 14, 16]);