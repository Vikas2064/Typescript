"use strict";
function calculateSum(a, b, type //// only these four type of input is possible
) {
    if (type === "sum") {
        return a + b;
    }
    else if (type === "sub") {
        return a - b;
    }
    else if (type === "mul") {
        return a * b;
    }
    else if (type === "div") {
        return a / b;
    }
    return -1;
}
console.log(calculateSum(1657, 5462, "mul"));
