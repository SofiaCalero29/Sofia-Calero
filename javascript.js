var nombre = "SOFIA";
var edad=20;
var string='string2';

let apellidos ='Muñiz';
let estatura=1.51;
const ESCUELA='TECNM ROQUE';

let string3='cadenas de texto';
let booleans=true;
let booleans2=false;
let number=10;
let number2=20.5;
let bigInt= BigInt(10);
let symbols = Symbol('Simbolo 1');
let arrays =[1,20,30,40];
let arrays2=[1,"otros datos",false];
let object ={};

let student={
    name: 'Sofia',
    lastName: 'Muñiz',
    age: 20,
    topics:['Programación web', 'Bases de Datos',],

    assements:{
        webDevelopmern:10,
        math:9,
    },
};

let nullables=null;

let obj1={
    propObj1:'Value 1',
};

let obj2={
    propObj2:'Value 2',
};

let obj3={
    prop3:'Value3',
    ...obj1,
    ...obj2,
};

console.table(obj3);

console.log(student['name']);
console.log(student.name);
console.log(student.properity1);
console.log(student);

student.name='Brenda';
console.log(student.name);
//comentario
/**
 * shbdhehebdh
 */

//delete student.name;

// let nombre= student.name;
// let edad=student.age;

//let {name:nombre, age:edad,} =student; destructuracion de objetos

//eliminar propiedades
//let {name1,...student2}= student;
//console.log(student2);
console.log(string3, booleans, booleans2, number, number2, bigInt, symbols,arrays,arrays2,object);

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log('String2: ' + string);
console.log('Apellidos: ' + apellidos);
console.log('Estatura: ' + estatura);
console.log(ESCUELA);