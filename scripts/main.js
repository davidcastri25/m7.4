//Creamos una HTML collection guardando todas las estrellas en una constante
const estrellas = document.getElementsByClassName("icono-rating");
//Guardamos en una constante el div contenedor de las estrellas
const container = document.getElementById("contenedor-rating");


/* ////////////////// EVENTO CLICK PARA LAS ESTRELLAS ////////////////// */
//Recorremos la HTML collection y añadimos a cada estrella un evento click
for (let i = 0; i < estrellas.length; i++){    

    estrellas[i].addEventListener("click", () => {
        //El evento click nos imprimirá en consola el índice (puntuación)
        console.log(i + 1);

        for (let j = 0; j < estrellas.length; j++) {
            //Limpiamos clases click, si las hay y están fuera del rango seleccionado
            if (estrellas[j].classList.contains("click") && j > i) {
                estrellas[j].classList.remove("click");
            }
            else if (j <= i) {
                estrellas[j].classList.add("click");
            }    
        }    
    });
}


/* ////////////////// EVENTO CLICK PARA DESELECCIONAR ////////////////// */
/* Node.contains() comprueba si un elemento está dentro de otro, y devuelve true o false. Lo tenemos que llamar en un elemento padre y pasarle el elemento que queremos comprobar como argumento */
//Añadimos un evento click a toda la ventana
window.addEventListener("click", (evento) => {
    //Si el elemento clickado NO está dentro de container, sacaremos todos los eventos click de las estrellas
    if (!container.contains(evento.target)) {
        for (const estrella of estrellas) {
            //Limpiamos clases click, si las hay y están fuera del rango seleccionado
            if (estrella.classList.contains("click")) {
                estrella.classList.remove("click");
            }
        }    
    }
});