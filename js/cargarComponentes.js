// carga un fragmento HTML en un contenedor por id
async function cargarFragmento(ruta, idDestino) {
  const contenedor = document.getElementById(idDestino);
  if (!contenedor) return;
  try {
    const resp = await fetch(ruta);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const html = await resp.text();
    contenedor.innerHTML = html;
    // tras insertar HTML, intentamos inicializar controles (por si cargamos header/sidebar)
    inicializarControlesSidebar();
  } catch (err) {
    console.error('Error al cargar fragmento:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  cargarFragmento('componentes/header.html', 'contenedor-encabezado');
  cargarFragmento('componentes/sidebar.html', 'contenedor-barra-lateral');
  cargarFragmento('componentes/footer.html', 'contenedor-pie');
});

// función que instala listeners para botón / overlay una sola vez cuando estén disponibles
function inicializarControlesSidebar() {
  if (window.__sidebarIniciado) return; // ya iniciado
  const boton = document.getElementById('boton-menu');
  const barra = document.getElementById('barra-lateral');
  const overlay = document.getElementById('overlay');

  // si alguno aún no existe, volvemos a intentar la próxima vez que carguemos un fragmento
  if (!boton || !barra || !overlay) return;

  // Listener del botón hamburguesa
  boton.addEventListener('click', (e) => {
    e.stopPropagation();
    const abierto = barra.classList.toggle('activo');
    overlay.classList.toggle('activo', abierto);
    boton.textContent = abierto ? '✖' : '☰';
    // accesibilidad
    barra.setAttribute('aria-hidden', abierto ? 'false' : 'true');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  // Cerrar con overlay
  overlay.addEventListener('click', () => {
    barra.classList.remove('activo');
    overlay.classList.remove('activo');
    boton.textContent = '☰';
    barra.setAttribute('aria-hidden', 'true');
    boton.setAttribute('aria-expanded', 'false');
  });

  // cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (barra.classList.contains('activo')) {
        barra.classList.remove('activo');
        overlay.classList.remove('activo');
        boton.textContent = '☰';
        barra.setAttribute('aria-hidden', 'true');
        boton.setAttribute('aria-expanded', 'false');
      }
    }
  });

  window.__sidebarIniciado = true;
}
