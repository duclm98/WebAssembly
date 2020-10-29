// JS Prime number checker
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return 0;
    }
    if (num != 1 && num != 0) {
        return 1;
    } else {
        return 0;
    }
}

// Check numbers 0 - {primes}
function checkPrimes(num) {
    let count = 0
    for (let i = 0; i < num; i++) {
        if (isPrime(i)) count++
    }
    return count
}