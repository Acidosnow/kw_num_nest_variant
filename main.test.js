const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameters!");
    });
});

test("Wrong command", () => {
    const main = spawn("node", ["main.js", "sum", "1", "2", "3"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    })
});

test("Invalid params", () => {
    const main = spawn("node", ["main.js", "avg", "1", "adf", "3"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Some arguments are not numbers!");
    })
});

test("Exceeded params (prime)", () => {
    const main = spawn("node", ["main.js", "prime", "1", "2"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Too much arguments!");
    })
});

test("Negative Number (prime)", () => {
    const main = spawn("node", ["main.js", "prime", "-20"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Argument should be non-negative number!");
    })
});

test("Exceeded params (factorial)", () => {
    const main = spawn("node", ["main.js", "factorial", "1", "2"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Too much arguments!");
    })
});

test("Negative Number (factorial)", () => {
    const main = spawn("node", ["main.js", "factorial", "-10"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Argument should be non-negative number up to  15!");
    })
});

test("Exceeded Number (factorial)", () => {
    const main = spawn("node", ["main.js", "factorial", "16"]);
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Argument should be non-negative number up to  15!");
    })
});