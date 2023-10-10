//Descripción del ejercicio en el archivo README.md

var num1 = parseInt(prompt("Introduzca un numero"));
var num2 = parseInt(prompt("Introduzca un numero"));

document.write("<h1> Entre " + num1 + " y " + num2 + " estan estos numeros: ");
for (var i = num1 + 1; i < num2; i++) {
  document.write(i + ", ");
}
