

function padLeft(char, str, quantity){
    for (let i = 0; i < quantity; i++) {
        str = char + str;
    }
    return str
}
console.log(padLeft("0", "123", 6)); // => "000123")

