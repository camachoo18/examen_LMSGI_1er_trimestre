let clickCount = 0;

function clickHTML() {
  const infoElement = document.querySelector("#info");
  
  if (clickCount === 0) {
    infoElement.innerHTML = "Has pulsado el botón";
  } else if (clickCount === 1) {
    infoElement.innerHTML = "Has vuelto a pulsar el botón!";
  } else if (clickCount === 2) {
    infoElement.innerHTML = "Fondo negro, texto blanco";
    infoElement.style.backgroundColor = "black";
    infoElement.style.color = "white";
  } else if (clickCount === 3) {
    infoElement.innerHTML = "Pulsa el botón";
    infoElement.style.backgroundColor = ""; 
    infoElement.style.color = ""; 
    clickCount = -1; 
  }

  clickCount++;
}

const clicksElemento = document.querySelector('#btn');
clicksElemento.addEventListener('click', clickHTML);
