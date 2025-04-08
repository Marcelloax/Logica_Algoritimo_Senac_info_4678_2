var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines[0]);
var numero2 = parseInt(lines[1]);
var numero3 = parseFloat(lines[2]);
var final = numero2*numero3;
console.log("NUMBER = " + numero + ('\n') + "SALARY = U$ " + final.toFixed(2));