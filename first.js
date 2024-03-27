"use strict";
var Airthmetics;
(function (Airthmetics) {
    Airthmetics[Airthmetics["sum"] = 0] = "sum";
    Airthmetics[Airthmetics["sub"] = 1] = "sub";
    Airthmetics[Airthmetics["mul"] = 2] = "mul";
    Airthmetics[Airthmetics["div"] = 3] = "div";
})(Airthmetics || (Airthmetics = {}));
function calculateSum(a, b, type //// only these four type of input is possible
) {
    if (type === Airthmetics.sum) {
        return a + b;
    }
    else if (type === Airthmetics.sub) {
        return a - b;
    }
    else if (type === Airthmetics.mul) {
        return a * b;
    }
    else if (type === Airthmetics.div) {
        return a / b;
    }
    return -1;
}
console.log(calculateSum(1657, 5462, Airthmetics.mul));
