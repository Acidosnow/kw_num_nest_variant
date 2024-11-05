const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
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
        break;
    case "factorial":
        if (numbers.length > 1) {
            console.log("Too much arguments!");
            process.exit(1);
        }
        result = lib.factorial(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);