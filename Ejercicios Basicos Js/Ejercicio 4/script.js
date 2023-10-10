//Descripción del ejercicio en el archivo README.md

var num1 = parseInt(prompt("Indroduzca un numero"));
var num2 = parseInt(prompt("Introduzca el segundo numero"));

document.write(
  "<h1> Los numeros impares entre " + num1 + " y " + num2 + " son: "
);
for (var i = num1 + 1; i < num2; i++) {
  if (i % 2 != 0) {
    document.write(i + ", ");
  }
}
