// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
// Ejemplo:

//     Ingresa un número> 5
//     1
//     3
//     4
//     5
// NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.

let numero = parseInt(prompt("Digite numero: "));
let lista = []

function listar(numero, lista){
    for(let i = 1; i <= numero; i++){
        lista.push(i)
    }
    console.log(lista)
    return lista
}

function eliminar(lista){
    let lista2= lista.splice(1, 1);
    console.log(lista)
}

listar(numero, lista);
eliminar(lista)
