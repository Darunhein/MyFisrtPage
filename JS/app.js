function showAlert2() {
  //Create event in this case alert
  alert("Hello there from Js inside another File");
}

//Call for button by id
const btnFile = document.getElementById("btn-file");

//Give event to button
btnFile.addEventListener("click", showAlert2);

////////////////////////////////////////////VARIABLES

let segundaVariable = "Valor";

console.log(typeof segundaVariable);

segundaVariable = 10;

console.log(typeof segundaVariable);

let variableUndefined;

console.log(typeof variableUndefined);

let variableNull = null;
console.log(typeof variableNull);

////////////////////////////////////////////CONSTANTES

////////////////////////////////////////////OBJETOS

//dentro de los objetos lo de que guarda en las variables es la referencia de memoria (NO EL VALOR DEL OBJETO)

const alumno = {
  nombre: "Juan",
  primerApellido: "Perez",
  segundoApellido: null,
  edad: 20,
  //Objeto anidado dentro de otro
  carrera: {
    nombreCarrera: "Redes Digitales",
    divisionAcademica: "DATID",
    nivelAcademico: "IRD",
  },
};

//////////////////////////////////////////ARREGLOS

const arreglo = ["Mouse", "Teclado", "Bocinas"];

console.log(arreglo[arreglo.length]);

//agregar elementos
arreglo.push("Monitor");
console.log(arreglo);

//agregar elementos
arreglo.pop();
console.log(arreglo);
