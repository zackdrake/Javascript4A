class Range {
    _from;
    _to;
    _fromToString;


    // Initialise l'objet
    constructor(from, to){
        this._from = from;
        this._to = to;
    }
    // Dit si `x` tombe dans l'interval [from; to]
    includes(x) {
        return this._from <= x && x <= this._to;
    }

    // Produit une chaîne de caractère sous la forme "(from...to)", par exemple "(2...8)"
    toString() {
        let fromToString = '';
        for (let i = this._from; i < this._to; i++) {
            fromToString += i
            if(i + 1 < this._to){
                fromToString += ','
            }
            this._fromToString = fromToString;
            return fromToString
        }
    }

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s){
        let from = s.charAt(0);
        let to = s.slice(-1);
        return new constructor(from, to)
    }

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern(){
        parse(this._fromToString);

    }
}

(new Span(2, 4)).toString(); // => "(2...6)"
(new Span(12, -8)).toString(); // => "(4...12)"
