/* Aplausos */
function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTeclas[0].onclick = tocaSomAplausos;

/* As linhas abaixo não possuem suas funçõe declaradas */
listaDeTeclas[2].onclick = tocaSomVaia;
listaDeTeclas[3].onclick = tocaSomRisada;
listaDeTeclas[4].onclick = tocaSomGrilo;
listaDeTeclas[5].onclick = tocaSomTambores;
listaDeTeclas[6].onclick = tocaSomTrombeta;
listaDeTeclas[7].onclick = tocaSomDinheiro;
listaDeTeclas[8].onclick = tocaSomVitoria;