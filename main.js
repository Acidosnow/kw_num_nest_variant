#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameters!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n)=>parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        if (numbers.length > 1) {
            console.log("Too much arguments!");
            process.exit(1);
        }
        result = lib.prime(numbers);
        if (result == -1) {
            console.log("Argument should be non-negative number!");
            process.exit(1);
        }
        break;
    case "factorial":
        if (numbers.length > 1) {
            console.log("Too much arguments!");
            process.exit(1);
        }
        result = lib.factorial(numbers);

        if (result == -1) {
            console.log("Argument should be non-negative number up to  15!");
            process.exit(1);
        }
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);