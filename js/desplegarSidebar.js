document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.info_more-btn');
  const collapseElement = document.querySelector('#sidebarInfoMore');

  // Escucha el evento "show.bs.collapse" de Bootstrap
  collapseElement.addEventListener('show.bs.collapse', function () {
    const icon = toggleButton.querySelector('i');
    icon.classList.remove('bi-three-dots-vertical'); // Remueve el ícono inicial
    icon.classList.add('bi-three-dots'); // Agrega el ícono desplegado
  });

  // Escucha el evento "hide.bs.collapse" de Bootstrap
  collapseElement.addEventListener('hide.bs.collapse', function () {
    const icon = toggleButton.querySelector('i');
    icon.classList.remove('bi-three-dots'); // Remueve el ícono desplegado
    icon.classList.add('bi-three-dots-vertical'); // Agrega el ícono inicial
  });
});