function diff(source, propertyNames){
    if(source != null){
        let keys = Object.keys(source);
        let keysPropertyNames = Object.keys(propertyNames);
        for(let i = 0; keys[i] != null; i++){
            for(let j = 0; j < keysPropertyNames.length; j++){
                if(keys[i] == keysPropertyNames[j]){
                    delete source[keys[i]];
                }
            }
        }
    }
}



let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity); // => { r: 0, g: 0, b: 0 }
console.log(o1 === objectWithoutOpacity);

console.log(o1)