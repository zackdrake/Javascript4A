
function dump(obj) {
    var string = '{';
    for (var p in obj) {
        string += p + ': "' + obj[p] + '" ';
    }
    string += '}';
    return string;
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
console.log(dump(obj)); // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}