console.log("Hola anto");

/***
 * Es una buena practica realizar comentarios en el codigo que hacemos y asi SE REALIZANC
 *
 */

//Declaracíon de variables
//tenemos la posibilidad de declarar las variables con var let const
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

//lista de cadenas de texto
let listaTareas: string[] = ["Tarea1", "Tarea 2"];

//Combinacion de tipos en listas.La lista puede tener valores de tipo string, number, boolean
let valores: (string | number | boolean)[] = [false, "Hola", true, 10];

//Definimos Enumerados

enum Estados {
  "Completado" = "c", //nombre del enumerado
  "Incompleto" = "i",
  "Pendiente" = "p",
}
//si no le agregamos un valor el valor de estado tarea cuando la intaciemos abajo sera 0 e ira incrementando su valor
// enum Estados {
//   "Completado",
//   "Incompleto",
//   "Pendiente",
// }

enum EstadoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: EstadoCarrera = EstadoCarrera.Segundo;

//TYPE - INTERFACE

//La diferencia en tre interface y type es que tipo es para crear un tipo mas complejo

//Interfaces, una interfaz en ts es una estructura abstracta que define un contrato en la apliacion. Especidica una forma o estructura que deberian seguir los OBJETO
interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}
//podemos crear variables que sigan la interface Tarea

let tarea2: Tarea = {
  nombre: "Tarea1",
  estado: Estados.Pendiente,
  urgencia: 10,
};
//lo curioso es que no podemos hace destructurin cuando le asignamos el tipo al obeto de una
// let { nombre, estado, urgencia } = tarea2;

//Asignación múltiple de variables
let miTarea = {
  titulo: "mitarea",
  estado: Estados.Completado,
  urgencia: 1,
};
//AQUIpodemos hacer destructuring/asignacion de variables y tener las variables a disposicion
let { titulo: string, estado, urgencia } = miTarea;

//spread
let listaCompraLunes: string[] = ["Leche", "PAN"];
let listaCompraMartes: string[] = [...listaCompraLunes, "ajo,lechiga"];
let listaCompraMiercoles: string[] = ["pescado", "carne"];
let listaCompraporSemana = [...listaCompraLunes, ...listaCompraMiercoles];

let estadoAPP = {
  usuario: "admin",
  sesion: 7,
  jwt: "fdasddf",
};
let nuevoEstado = {
  ...estadoAPP,
  sesion: 8,
};

//Podemos crear tipos propios- Type

type Producto = {
  precio: number;
  nombre: string;
  anio: number;
};

let coche: Producto = {
  nombre: "Audi",
  precio: 45000,
  anio: 2010,
};

//Condicionales

//Operadores ternario
console.log(
  coche.anio < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`
);

if (error) {
  console.log("Hay un error");
} else {
  console.log("No hay un error");
}

if (coche.anio < 2010) {
  console.log(`Coche: ${coche.nombre} es nuevo`);
} else if (coche.anio === 2010) {
  console.log(`Coche: ${coche.nombre} es viejo`);
} else {
  `Coche: ${coche.nombre} es nuevo`;
}

switch (tarea2.estado) {
  case Estados.Completado:
    console.log("la tarea esta completada");
    break;
  case Estados.Incompleto:
    console.log("la tarea esta incompleta");
    break;
  default:
    break;
}

//yo puedo intentar realizar algun tipo de operacion y si no sale bien capturar el error
try {
} catch (error) {}

//Bucles
let listaTareasNueva: Tarea[] = [
  {
    nombre: "Tarea1",
    estado: Estados.Completado,
    urgencia: 2,
  },
  {
    nombre: "Tarea2",
    estado: Estados.Pendiente,
    urgencia: 0,
  },
  {
    nombre: "Tarea3",
    estado: Estados.Completado,
    urgencia: 15,
  },
];
//foreach
listaTareasNueva.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

//for clasico
for (let index = 0; index < listaTareasNueva.length; index++) {
  const tarea = listaTareasNueva[index];
  console.log(`${index} - ${tarea.nombre}`);
}

//forin - cadenas de texto, objetos

//bucles while
while (tarea2.estado !== Estados.Completado) {
  tarea2.urgencia++;
  if (tarea2.urgencia == 5) {
    tarea2.estado = Estados.Completado;
    break;
  } else {
    tarea2.urgencia++;
  }
}

//Do While, anda cambiando el valor de la urgencia de la tarea incrementandola y le cambias el estado de la tarea a completado  mientras que la el estado de la tarea no este completado.

do {
  tarea2.urgencia++;
  tarea2.estado = Estados.Completado;
} while (tarea2.estado !== Estados.Completado);
