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

/* As linhas abaixo não possuem suas funções declaradas */
listaDeTeclas[2].onclick = tocaSomRisada;
listaDeTeclas[3].onclick = tocaSomErrado;
listaDeTeclas[4].onclick = tocaSomGrilo;
listaDeTeclas[5].onclick = tocaSomTambores;
listaDeTeclas[6].onclick = tocaSomTrombeta;
listaDeTeclas[7].onclick = tocaSomDinheiro;
listaDeTeclas[8].onclick = tocaSomVitoria;