function startWith(str, start){
    const strArray = str.split('');
    const startArray = start.split('');
    let i = 1;

    if (startArray[0] == strArray[0]){
        for (let i = 1; i < start.length + 1; i++){
            if(i == start.length){
                console.log("true")
                return true
            } else if (startArray[i] != strArray[i]){
                console.log("false")
                return false
            }
        }
    } else{
        console.log("false")
        return false
    }
}

startWith("Et demain matin, j'te fais des gaufres au sucre !!", "Et demain"); // => true
startWith("Les ogres c'est comme les oignons.", "Ça schlingue ?"); // => false