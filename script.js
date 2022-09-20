// 1) Сделать модуль (npm init или через модули js)
// 2) реализовать модуль calculator
// 3) каждая функция действия (add, sub, div, mult) должна быть в отдельном файле

import * as calculator from "./js/calculator.js";

console.log(calculator.div(28, 2))
console.log(calculator.add(10, 2))
console.log(calculator.sub(12, 5))
console.log(calculator.mult(7, 4))