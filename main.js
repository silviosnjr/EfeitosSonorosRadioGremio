/* Aplausos */
function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}

/* Vaia */
function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador + 1;
    console.log(contador);
}