// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

let frase = prompt("Ingresar una frase: ");
let n_repetir  = 10           //prompt("Ingresar cuantas veces desea repetir la frase: ");

function repetir(frase, n_repetir){
    
    for(let i = 1; i<= n_repetir; i++){

        console.log (i +". "+ frase)
    }
       
}
repetir(frase, n_repetir)