/* Si quisieramos aplicar diversas estructuras de ratings en la página, no solo una, encapsularía todo el código en una función que tuviera como parámetro la ID del div container */

//Guardamos en una constante el div contenedor de las estrellas
//const container = document.getElementById("contenedor-rating");
const CONTAINER = document.querySelector("#contenedor-rating");

//Creamos una HTML collection guardando todas las estrellas en una constante (las estrellas concretas contenidas en container)
//const estrellas = document.getElementsByClassName("icono-rating");
const ESTRELLAS = CONTAINER.querySelectorAll(".icono-rating");


/* ////////////////// EVENTO CLICK PARA LAS ESTRELLAS ////////////////// */
//Recorremos la HTML collection y añadimos a cada estrella un evento click
for (let i = 0; i < ESTRELLAS.length; i++){    

    ESTRELLAS[i].addEventListener("click", () => {
        //El evento click nos imprimirá en consola el índice (puntuación)
        console.log(i + 1);

        for (let j = 0; j < ESTRELLAS.length; j++) {
            //Limpiamos clases click, si las hay y están fuera del rango seleccionado
            if (ESTRELLAS[j].classList.contains("click") && j > i) {
                ESTRELLAS[j].classList.remove("click");
            }
            else if (j <= i) {
                ESTRELLAS[j].classList.add("click");
            }    
        }    
    });
}


/* ////////////////// EVENTO CLICK PARA DESELECCIONAR ////////////////// */
/* Node.contains() comprueba si un elemento está dentro de otro, y devuelve true o false. Lo tenemos que llamar en un elemento padre y pasarle el elemento que queremos comprobar como argumento */
//Añadimos un evento click a toda la ventana
window.addEventListener("click", (evento) => {
    //Si el elemento clickado NO está dentro de container, sacaremos todos los eventos click de las estrellas
    if (!CONTAINER.contains(evento.target)) {
        for (const ESTRELLA of ESTRELLAS) {
            //Limpiamos clases click, si las hay y están fuera del rango seleccionado
            if (ESTRELLA.classList.contains("click")) {
                ESTRELLA.classList.remove("click");
            }
        }    
    }
});