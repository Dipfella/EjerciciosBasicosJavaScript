var num1 = parseInt(prompt("digite un numero",0));
var num2 = parseInt(prompt("digite otro numero",0));

if (num1 > num2) {
   alert("El numero mayor es " + num1 + " el numero menor es " + num2)
}
else if (num1 < num2) {
   alert("El numero mayor es " + num2 + " el numero menor es " + num1)
}
else if (num1 == num2){
    alert("Los numeros son iguales")
}
else {
    alert("Introduzca números correctos")
}