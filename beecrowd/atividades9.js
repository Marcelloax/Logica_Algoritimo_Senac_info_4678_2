var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Nome = lines[0];
var salario = parseFloat(lines[1]);
var vendas = parseFloat(lines[2]);
var mes = (salario + vendas)* 0.15;
console.log("TOTAL = " + mes);