const ligarLamp = document.getElementById("ligarLamp");
const desligarLamp = document.getElementById("desligarLamp");
const lamp = document.getElementById("lamp");

ligarLamp.addEventListener("click", lampLigada);
desligarLamp.addEventListener("click", lampDesligada);

function isLampQuebrada() {
  // indexOf - (faz uma varredura na string, buscando outro termo dentro da string. Se dentro de src, estiver uma string com a palavra 'quebrada', significa que a lamp estará quebrada. E trará um número > -1. Se não encontrar, trará -1 (True ou False)//
  return lamp.src.indexOf("quebrada") > -1;
}

function lampLigada() {
  if (!isLampQuebrada()) {
    lamp.src = "./img/ligada.png";
  }
}

function lampDesligada() {
  if (!isLampQuebrada()) {
    lamp.src = "./img/desligada.jpg";
  }
}

lamp.addEventListener("dblclick", lampQuebrada);

function lampQuebrada() {
  lamp.src = "./img/quebrada.jpg";
}

const interruptor = document.getElementById("interruptor");

interruptor.addEventListener("click", () => {
  if (interruptor.className == "on") {
    interruptor.src = "./img/off.png";
    interruptor.className = "off";
  } else {
    interruptor.src = "./img/on.png";
    interruptor.className = "on";
  }
});

