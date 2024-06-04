// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

let frase = prompt("Ingresar una frase: ");
let numero = parseInt(prompt("Digite numero: "));

function repetir(frase, numero){
    
    for(let i = 1; i<= numero; i++){

         console.log (i +". "+ frase)

    }
       
}
repetir(frase, numero)
