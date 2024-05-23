function powWithRecursion(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / posPowCal(x, -n);
    }
    return posPowCal(x, n);
}

function posPowCal(x, n) {
    if (n === 1) {
        return x;
    }
    if (x === 1) {
        return 1
    }

    let half = posPowCal(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}

console.log(powWithRecursion(2, 10)); 
console.log(powWithRecursion(2, -2));
console.log(powWithRecursion(0.00001, 2147483647)); 
