let elemento = null;/*conteúdo extra:transformamos a constante elemento em uma variável global*/ 
function tocaSom(idElementoAudio){
    elemento = document.querySelector(idElementoAudio); /*ajuste: variável recebe o áudio*/
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;

    tecla.onclick = function (){
        if(elemento){elemento.pause();}/*conteúdo extra: para o áudio antes de iniciar outro*/
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){     
        if (evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
