function tocaSom(idelementoaudio){
    document.querySelector(idelementoaudio).play();
}
const listadebotoes = document.querySelectorAll('.tecla' );

let contador = 0;

while (contador < listadebotoes .length){
listadebotoes[contador].onclick = tocaSom;
contador = contador + 1;
}