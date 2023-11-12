console.log("Hola anto");

/***
 * Es una buena practica realizar comentarios en el codigo que hacemos y asi SE REALIZANC
 *
 */

//Declaracíon de variables
//BuiltIn Types: number,string,boolean,void,null y undefined
//Template strign si
//Asi se tipa: (tipo de dato)
//asi le estamos al tsc que tipo de variable es que lo va a transpilar y al entorno de desarrollo como se tiene que comportar esta variable, se tiene que comportar como un string, una ves se infiere de tipo no se puede a menos que se le ponga any, que no es buena practica
let nombre: string = "antonella";
const pi: number = 3.1416;
let apellido = "rios"; //hace que la variable pueda cambiar de tipo
let tel: boolean;
tel = true;
var error: boolean = false;

console.log(`hay error: ${error}`); //Si yo lo ejecuto esto seria una representacion de candena de texto de tru o false.

//Instanciacion multiple de variables
let a: string, b: boolean, c: number; //instancia 3 variables sin valor inicial.
a = "typescript";
b = true;
c = 4;

//Con esta syntaxis podemos generar LISTAS DE UN TIPO DE DATO O DIF TIPOS DE DATOS
let listaTareas: string[] = ["Tarea1", "Tarea 2"];
let valores = [false, "Hola"];
