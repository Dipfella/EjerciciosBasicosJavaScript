//Descripción del ejercicio en el archivo README.md

var suma = 0;
var contador = 0;
do {
  var numero = parseInt(
    prompt("Introduce un numero hasta introducir uno negativo", 0)
  );

  if (isNaN(numero)) {
    numero = 0;
  } else if (numero >= 0) {
    suma += numero;
    contador ++;
  }
} while (numero >= 0);
{
    alert("la suma de todos los numeros es: " + suma )
    alert("la media de todos los numeos es: " + (suma / contador))
}
