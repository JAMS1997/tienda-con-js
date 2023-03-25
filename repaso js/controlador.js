//Para importar un archivo de JavaScript utilizamos import.
import {productos} from "./baseDatos.js"
let fila = document.getElementById("fila")
//Recorriendo el arreglo 
productos.forEach(function(producto){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid")
    foto.src=producto.Foto

    //padres e hijos
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})