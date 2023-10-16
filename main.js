function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];

    //template string
    const idAudio = `#som_${efeito}`;

    //O template string poderia ser substituído por concatenação
    //const idAudio = "#som_"+efeito;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    
    //console.log(contador);
}