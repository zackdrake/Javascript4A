function split(str, sep){
    const strArray = Array.from(str);
    const sepArray = Array.from(sep);
    let f = 0;
    let strSep;
    let sentenceInString;

    for (j = 0; j < strArray.length; j++) {
        if (sepArray[0] == strArray[j]) {
            console.log("yes1")
            for (let i = 0; i < sep.length; i++) {
                console.log("yes2")
                console.log(i)
                console.log(sep.length)
                if (i == (sep.length - 1)) {
                    if (sepArray[i] != strArray[i + j]) {
                        console.log("break")
                        break
                    }
                    console.log("yes3")
                    let sentenceInArray;
                    let e = 0
                    for (let k = j; k < (k + i); k++) {
                        sentenceInArray[e] = strArray[k];
                        e++;
                    }
                    sentenceInString = JSON.stringify(sentenceInArray);
                    console.log(JSON.stringify(sentenceInArray));
                    strSep[f] = sentenceInString;
                    f++;
                    for (let k = 0; k < (i + j); k++) {
                        strArray[k].delete();
                    }
                }
            }
        }
    }
    console.log(strSep)
}

split("Bonjour, je m'appelle Jean !", " "); // => ["Bonjour,", "je", "m'appelle", "Jean", "!"]
split("I'm reading a wooden book.", "oo") // => ["I'm reading a w", "den b", "k."]