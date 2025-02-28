//Ejercicio 1
/*
let nombre = "Jesus Silva";
let edad = 35;
let ciudad = "Garzón Huila";
console.log("Mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);

 Crea una variable llamada precio y asígnale un valor decimal. 
Luego, crea otra variable llamada cantidad y asígnale un valor entero. 
Muestra el tipo de dato de cada variable en la consola.

let precio = 3.14;
let cantidad = 5;

console.log(typeof precio); // Imprime en la consola
document.write(typeof cantidad); // Imprime en el navegador
alert(typeof cantidad); // Imprime en una ventana emergente*/

//ESTRUCTURAS DE CONTROLS

//EJEMPLO 1 - DECLARAR DOS VARIABLES UNA QUE SEA EL NOMBRE Y LA OTRA LA EDAD Y MOSTRAR SI ES MAYOR DE EDAD O NO.

/*
el usuario digite nombre y edad con la siguiente de verificacion

1 a 18 años es joven
19 a 40 años es adulto
41 a 60 años es maduro
61 en adelante es anciano

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

if (edad <= 18) {
    alert("Hola: " + nombre + " eres una persona JOVEN");
}else if(edad <= 40){
    alert("Hola: " + nombre + " eres una persona ADULTA");
}else if(edad<=60){
    alert("Hola: " + nombre + " eres una persona MADURA");
}else{
    alert("Hola: " + nombre + " eres una persona ANCIANO");
}

 

//CICLO WHILE

// DECLARAR UNA VARIABLE NUMERICA QUE MUESTRE LA CUENTA REGRESIVA A LLEGAR A 0


let cuentaAtras = parseInt(prompt("Ingrese un número"));

const NUMERO_REVISIONES = 3


// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  document.write(cuentaAtras+"<br>")

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    document.write(revisionesRealizadas + ' revisiones realizadas...<br>')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}
  */

//DO WHILE

/* Imprimir 5 edades de diferentes personas y determinar si son mayores de edad

let contador = 1;

do {

    let personas = prompt("Ingrese su nombre");

    let edad = parseInt(prompt("Ingrese la edad"));

    if (edad >= 18) {
        alert("Persona No. "+contador+": "+personas+" Es mayor de edad");
    } else {
        alert("Persona No. "+contador+": "+personas+" Es menor de edad");
    }
    contador++;

} while (contador < 5);*/

//FOR

/* Imprimir las tabla de multiplicar del numero que el usuario ingrese 
hasta el numero 10, utilizando el ciclo for y mostrar en pantalla la 
siguiente sintaxis

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/



// 1. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

// 2. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// 3. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// 4. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 


//SWITCH

// EJERICIO 1: Realizar un programa que detemine que dia de la semana corresonde hoy, utilizando la funcion Prompt



/*
const dia= new Date().getDay()


switch (dia) {

    case 1:
    console.log("¡Hoy es lunes formacion con Gonzalo! 😢")
    break

    case 1:
    console.log("¡Hoy es martes formacion con Jesus! 😢")
    break

    case 3:
    console.log("¡Hoy es Miercoles formacion con Gonzalo! 😢")
    break

    case 4:
    console.log("¡Hoy es jueves formacion con Emeson! 😢")
    break

    case 5:
    console.log("¡Hoy es viernes formacion con Jesus! 😢")
    break

    case 6:
    console.log("¡Hoy es sabado de descanso! 😢")
    break

    case 0:
    console.log("¡Hoy es domingo de descanso! 😢")
    break
    

  default:
    console.log("no corresponde al dia de la semana! 🚀")
    break
}
*/

/*
Utilizando la estrutura switch realizar el siguiente ejercicio:

el usuario digite nombre y edad con la siguiente de verificacion

1 a 18 años es joven
19 a 40 años es adulto
41 a 60 años es maduro
61 en adelante es anciano*/
