
// 1

function add(x, y) {
    return x+y;
}
console.log(add(1, 8))

//2

function mult (c, d) {
    let multi = c;
    for (let i = 1; i < d; i++) { //moves through array
        multi = add (c, multi);
    }
    return multi;
}
console.log(mult(6, 5))

//3

function exp (g, h) {
    let base = g;
    for (let i = 1; i < h; i++) {
        base = mult(g, base); 
    }
    return base;
}
console.log(exp(2,8))

//4

function factorial (z) {
    let fact = 1
    for (let i = 1; i<= z; i++ ) {
        fact = mult(i, fact);
    }

    return fact;
}
console.log(factorial(8))

//5