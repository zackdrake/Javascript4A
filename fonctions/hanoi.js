function hanoi(n, D, A, I){
    if (I == undefined){
        I = 2
    }
    if (n > 0){
        hanoi(n - 1, D, I, A);
        console.log(D + "->" + A);
        hanoi(n - 1, I, A, D);
    }
}
hanoi(3, 1, 3)

