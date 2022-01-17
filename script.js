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

const dragon = document.getElementById('drag');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointermove', onDragMove);
dragon.addEventListener('pointerup', onDragEnd);

// translateX = 50;
// translateY = 50;
// let resultadoX = 152;
// let resultadoY = 0;
document.addEventListener('keyup', onDragMoveKeyboard);
function onDragMoveKeyboard (event){
  const offset = 50;
  const dragon = document.getElementById('drag');
  switch(event.code){
    case 'ArrowUp':
      offsetY -= offset;
      dragon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      break;
    case 'ArrowRight':
      offsetX += offset;
      dragon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      break;
    case 'ArrowDown':
      offsetY += offset;
      dragon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      break;
    case 'ArrowLeft':
      // Diminuir 50 da variavel global offsetX
      offsetX -= offset;
      dragon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      break;
  }
}
