//Creamos una HTML collection guardando todas las estrellas en una constante
const estrellas = document.getElementsByClassName( "icono-rating");

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