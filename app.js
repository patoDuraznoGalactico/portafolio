const window_1 = document.getElementById('pestaña_1');
const current_time = document.getElementById('current_time');



var offsetX, offsetY;


/* ----------------FUNCION PARA MOVER LA VENTANITA------------------- */
function startDrag(e) {
  offsetX = e.clientX - window_1.getBoundingClientRect().left;
  offsetY = e.clientY - window_1.getBoundingClientRect().top;
  pestaña_1.style.cursor = 'grabbing';
  window.addEventListener('mousemove', moveWindow);
  window.addEventListener('mouseup', letWindow);
}

function moveWindow(e) {
  window_1.style.left = e.clientX - offsetX + 'px';
  window_1.style.top = e.clientY - offsetY + 'px';
}

function letWindow() {
  window_1.style.cursor = 'grab';
  window.removeEventListener('mousemove', moveWindow);
  window.removeEventListener('mouseup', letWindow);
}
window_1.addEventListener('mousedown', startDrag);

/* ---------------------------------------------------- */
function showTime(){

  const date = new Date();

  var hour = date.getHours();
  var minutes = date.getMinutes();

  hour = (hour < 10 ? '0' : '') + hour;
  minutes = (minutes < 10 ? '0' : '') + minutes;
  const dateCurrent = hour + ':' + minutes;
  current_time.textContent = dateCurrent;
}


setInterval(showTime, 1000);