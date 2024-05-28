// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.


let primerValor = parseFloat(prompt("Digite primer valor: "));
let segundoValor =  parseFloat(prompt("Digite segundo valor: "));


function sumar(primerValor,segundoValor){
    let suma = primerValor + segundoValor

    return suma
}
sumar(primerValor,segundoValor)

console.log("la suma entre" + primerValor + "y " + segundoValor + "es " +suma);