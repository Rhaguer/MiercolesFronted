//INTRODUCION A JAVASCRIPT

//1- DECLARACION DE VARIABLES
var nombre= "francisco";
let edad = 34;
const esDocente = true; 

//TIPO DE DATOS
let numero = 400;
let texto = "ESTOY EN INACAP";
let booleano = true;
let indefinido;

//OPERADORES
let sumaa = 5 + 5;
let restaa = 5 - 5;
let concatenacion = "HOLA ESTOY" + " " + "en inacap";//HOLA ESTOY EN INACAP

let numero1 = 10;
let numero2 = 5;


let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * numero2;
let divi = numero1 / numero2;

console.log(suma);
console.log(resta);
console.log(multi);
console.log(divi);

let texto1 = "Hola";
let texto2 = "ESTOY EB INACAP"
let texto3 = 

let texto3 = texo1+ " " texto2;

//ESTRUCTURA DE CONTROL 
//IF
let dias = 30;
if (dias <=20){
    console.log("estoy en vacaciones");
} else {
    console.log("estoy en clse")
}

//BUCLE
for (let i=0; i < 5; i++){
    console.log(1numero:  +contador);

}
        









































//5 - manipulacion del dom
// seleccion de elementos 
let titullo = document.getElementById("Titulo");
titulo.textContent = "Bienvenidos a inacapppp";
titulo.style.fontSize = "50px";
titulo.style.color = "red";
let parrafo = document.querySelector(".Parrafo");
parrafo.innerHTML = "<strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, perspiciatis.</strong>"";

let boton = document.getElementById("btnValorTexto");
boton.addEventListener("click", function(){
    alert("hicite clik!")
})

let boton2 = document.getElementById("btnValorTexto");
let txtnombre = document.getElementById("txtNombre");
boton2.addEventListener("click", function(){
    alert("valor: " + txtnombre.value);
});

//TRABAJAR CON ARREGLOS
//PUSH: AGREGA AL FINAL
paises.push("Ecuador");
console.log(paises);
//POP:QUITAEL ULTIMO DATO
paises.pop()
console.log(paises);
//UNSHIFT: AGREGA AL INICIO DEL ARREGLO 
paises.unshift("Haiti");
console.log(paises);
//SHIFT: QUITA EL PRIMER DATO 
paises.shift();
console.log(paises);




