document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('./data/products.json');
    const products = await res.json();

    // ---------- Crear slides del carousel ----------
    const perSlide = 3; // cuántas mini-tarjetas se muestran por slide
    const carouselInner = document.getElementById('carouselInner');
    const template = document.getElementById('carousel-item-template');

    // crear array de slides (grupos de perSlide)
    for(let i=0; i<products.length; i+=perSlide){
      const slideProducts = products.slice(i, i+perSlide);
      const clone = template.content.cloneNode(true);
      const thumbs = clone.querySelectorAll('.product-thumb');

      thumbs.forEach((thumbEl, idx) => {
        const p = slideProducts[idx];
        if(!p){
          // si no hay producto, ocultar el thumb
          thumbEl.style.visibility='hidden';
          return;
        }
        thumbEl.style.visibility='visible';
        thumbEl.querySelector('img').src = p.imagen;
        thumbEl.querySelector('img').alt = p.nombre;
        thumbEl.querySelector('.p-name').textContent = p.nombre;
        thumbEl.querySelector('.p-price').textContent = '$' + p.precio.toLocaleString();

        // evento click y enter para accesibilidad
        thumbEl.addEventListener('click', () => onSelectProduct(p, thumbEl));
        thumbEl.addEventListener('keydown', (e) => { if(e.key === 'Enter') onSelectProduct(p, thumbEl); });
      });

      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      if(i === 0) carouselItem.classList.add('active');
      carouselItem.appendChild(clone);
      carouselInner.appendChild(carouselItem);
    }

    // seleccionar el primer producto por defecto si existe
    if (products.length > 0) onSelectProduct(products[0], document.querySelector('.product-thumb'));

  } catch(err){
    console.error('Error loading products:', err);
  }
});

// manejar selección: animación y mostrar detalles
function onSelectProduct(product, thumbEl){
  // quitar selected de todos
  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('selected'));

  // marcar seleccionado (animación CSS)
  if(thumbEl) thumbEl.classList.add('selected');

  // mostrar detalles en panel derecho
  const details = document.getElementById('detailsContent');
  details.innerHTML = ''; // limpiar

  // crear un product-card (Web Component)
  const wc = document.createElement('product-card');
  wc.setAttribute('nombre', product.nombre);
  wc.setAttribute('descripcion', product.descripcion);
  wc.setAttribute('precio', product.precio);
  wc.setAttribute('imagen', product.imagen);
  details.appendChild(wc);

  // specs y colores
  const specsWrap = document.createElement('div');
  specsWrap.style.marginTop = '12px';
  specsWrap.innerHTML = `
    <h4>Características</h4>
    <div class="specs">
      <div><strong>CPU</strong><div>${product.specs.CPU}</div></div>
      <div><strong>RAM</strong><div>${product.specs.RAM}</div></div>
      <div><strong>Almacenamiento</strong><div>${product.specs.Almacenamiento}</div></div>
      <div><strong>GPU</strong><div>${product.specs.GPU}</div></div>
    </div>
    <h5 style="margin-top:12px">Colores</h5>
  `;
  details.appendChild(specsWrap);

  const colors = document.createElement('div');
  product.colores.forEach(c => {
    const sw = document.createElement('span');
    sw.className = 'color-swatch';
    sw.style.background = c;
    colors.appendChild(sw);
  });
  details.appendChild(colors);

  const btn = document.createElement('a');
  btn.className = 'btn btn-primary';
  btn.style.marginTop = '12px';
  btn.href = '#';
  btn.textContent = 'Ver detalles / Comprar';
  details.appendChild(btn);
}
