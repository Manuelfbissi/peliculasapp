const status_element = document.getElementById('estado');

function updateStatus() {
  if (!navigator.onLine) {
    status_element.innerHTML = 'Sin conexión';
    console.log('Estoy sin conexión');
  } else {
    status_element.innerHTML = 'Estás online';
  }
}

window.addEventListener('load', updateStatus);
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
