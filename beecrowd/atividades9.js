var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Nome = lines[0];
var salario = parseFloat(lines[1]);
var vendas = parseFloat(lines[2]);
var final = (salario * 0.15)+salario;


console.log("o total a receber no final do mês e " + final.toFixed(2));
