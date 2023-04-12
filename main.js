/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.*/

// const saberPar = (num) => {
//     if( (num%2) == 0) {
//         console.log(`el numero ${num} es par`) ;
//     } else{
//         console.log(`el numero ${num} es impar`) ;
//     }
// }

// saberPar(3);

/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.*/

// const MayorAlOtro = (a, b) => {
//     if( a== b){
//         console.log(`los numero son iguales`);
//     } else if(a > b) {
//         console.log(`El numero ${a} es mayor que ${b}`);
//     } else {
//         console.log(`El numero ${b} es mayor que ${a}`);
//     }
// }

// MayorAlOtro(2, 2);

/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.*/

// const multiploDeCinco = (a) => {
//     if (a%5 == 0) {
//         console.log(`El numero ${a} es multiplo de 5`);
//     } else {
//         console.log(`El numero ${a} no es multiplo de 5`);
//     }
// }

// multiploDeCinco(12);

/*4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.*/

// const imprimirAnteriores = (a) => {
//     for(let i = 0; i<= a; i++) {
//         console.log(i);
//     }
// }

// imprimirAnteriores(8);

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.*/

// const repetirPalabra = (palabra, num) => {
//     for(let i = 0; i < num; i++) {
//         console.log(palabra);
//     }
// }

// repetirPalabra("loro", 4);


/*6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.*/

// const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mostrarArray = (miArray) => {
//     for(let i = 0; i < miArray.length; i++) {
//         console.log(miArray[i]);
//     }
// }

// mostrarArray(miArray);

/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/

// const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mostrarArray = (miArray) => {
//     for(let i = 0; i < miArray.length; i++) {
//         if(i !== 4) {
//             console.log(miArray[i]);
//         }
//     }
// }

// mostrarArray(miArray);

/*8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/

// const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiplicarArray = (a, b) => {
//     for(i = 0; i < a.length; i++) {
//         console.log(a[i]* b);
//     }
// }

// multiplicarArray(miArray, 2);