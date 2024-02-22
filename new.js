/**let nombre = 'Valor variable';
var nombreVariable2 = 11;
 
let obj1 = {
    propiedad1: 11,
    propiedad2: 'Valor propiedad 2',
    propiedadObjeto:{
        propiedad4: ['valor', 'valor2', 'valor3'],
        propiedad5: 'Valor propiedad 5',
    }
};

console.log(object);
console.log (object.propiedad1);
console.log(objet.propiedadObjeto.propiedad4);*/

// //function nombreFuncion(){
//     console.log('Ejecutando función "NombreFunción');
// }

// function nombreConParametros(nombre, apellido, edad){
//     let text = "Nombre:" + nombre + ", Apellido: " + apellido + ", Edad:" + edad;
//     console.log(text);
// } 
// nombreFuncion();
// nombreConParametros('Brenda', 'Calero', 19);


// /**
//  * Retorna el cuadrado de el número dado.
//  * @param Number number 
//  * @returns 
//  */
// function square (number){
//     return number*number;
// }

// function cube(number){
//     return number*number*number;
// }

// console.log(square(8));
// console.log(cube(8));

//for
for (let index = 0; index < 11; index++) {
    let number = 10 * index;
    console.log(number);
}

//while
let indexwhile = 0;
while (indexwhile < 11) {
    let number = indexwhile * 10;
    console.log(number);
    indexwhile++;
}

//do-while
let indexDowhile = 0;
do {
    let number = indexDowhile * 10;
    console.log(number);
    indexDowhile++;
} while (indexDowhile < 10)

//Funciones
/**
 * Tabla de multiplicar con FOR
 * @param {Number} tabla 
 * @param {Number} fin 
 */
function tablaMultiplicarFor(tabla, fin) {
    for (let index = 0; index < fin; index++) {
        let number = tabla * index;
        console.log(number);
    }
}

console.log(tablaMultiplicarFor(8, 100));

/**
 * Tabla de multiplicar con WHILE
 * @param {Number} tabla 
 * @param {Number} fin 
 */
function tablaMultiplicarWhile(tabla, fin) {
    let indexwhile = 0;
    while (indexwhile < fin) {
        let number = indexwhile * tabla;
        console.log(number);
        indexwhile++;
    }
}

console.log(tablaMultiplicarWhile(8, 10));

/**
 * Tabla de multiplicar usando DO-WHILE
 * @param {Number} tabla 
 * @param {Number} fin 
 */
function tablaMUltiplicarDoWhile(tabla, fin) {
    let indexDowhile = 0;
    do {
        let number = indexDowhile * tabla;
        console.log(number);
        indexDowhile++;
    } while (indexDowhile < fin)
}
console.log(tablaMUltiplicarDoWhile(7, 5));