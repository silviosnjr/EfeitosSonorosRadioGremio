/* Aplausos */
function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}

/* Vaia */
function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas[0].onclick = tocaSomAplausos;
listaDeTeclas[1].onclick = tocaSomVaia;

let contador = 0;

//enquanto
while(){
    
}