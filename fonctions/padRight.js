function padRight(char, str, quantity){
    for (let i = 0; i < quantity; i++) {
        str = str + char;
    }
    return str
}
console.log("(" + padRight(" ", "45", 8) + ")"); // => "45      "