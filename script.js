let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let dragStarted = false;
function onDragStart(event) {
  originX = event.clientX;
  originY = event.clientY;
  console.log(originX);
  console.log(originY);
  dragStarted = true;
  // Mouse continua sendo rastreado mesmo que o mouse saia
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
  if (!dragStarted) {
    return;
  }
  //Prevenir o browser de se comportar ao arrastar img
  event.preventDefault();
  const deltaX = event.clientX - originX;
  const deltaY = event.clientY - originY;
  // Para o dragao pegar a posicao anterior + deslocamento
  const translateX = offsetX + deltaX;
  const translateY = offsetY + deltaY;
  event.currentTarget.style.transform = 'translate(' + 
    translateX + 'px, ' + translateY + 'px)';
}

function onDragEnd(event) {
  dragStarted = false;
  offsetX += event.clientX - originX;
  offsetY += event.clientY - originY;
}

const dragon = document.querySelector('img');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointermove', onDragMove);
dragon.addEventListener('pointerup', onDragEnd);

translateX = 50;
translateY = 50;
let resultadoX = 152;
let resultadoY = 0;
document.addEventListener('keyup', onDragMoveKeyboard);
function onDragMoveKeyboard (event){
  switch(event.key){
    case 'ArrowUp':
      dragon.style.transform = 'translateY(' + (-translateY) + 'px)';
      translateY += 50;
      break;
    case 'ArrowRight':
      dragon.style.transform = 'translateX(' + translateX + 'px)';
      translateX += 50;
      break;
    case 'ArrowDown':
      dragon.style.transform = 'translateY(' + translateY + 'px)';
      translateY += 50;
      break;
    case 'ArrowLeft':
      dragon.style.transform = 'translateX(' + (-translateX) + 'px)';
      translateX += 50;
      break;
  }
}
