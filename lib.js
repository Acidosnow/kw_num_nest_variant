function avg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function prime(num) {
    if (num < 0) {
        console.log("Argument should be non-negative numbers!");
        process.exit(1);
    }
    if (num == 1) return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num > 15 || num < 0) {
        console.log("Argument should be non-negative number up to 15!");
        process.exit(1);
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    avg,
    prime,
    factorial
}