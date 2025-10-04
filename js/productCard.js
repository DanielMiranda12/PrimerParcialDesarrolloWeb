class ProductCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }
  connectedCallback(){
    const name = this.getAttribute('nombre') || '';
    const desc = this.getAttribute('descripcion') || '';
    const price = this.getAttribute('precio') || '';
    const img = this.getAttribute('imagen') || '';

    this.shadowRoot.innerHTML = `
      <style>
        .card{border-radius:10px;padding:12px;background:white;box-shadow:0 8px 20px rgba(0,0,0,0.06);max-width:320px}
        img{width:100%;height:180px;object-fit:cover;border-radius:8px}
        h3{margin:8px 0}
        .price{color:var(--primary, #0B74D1);font-weight:700}
      </style>
      <div class="card">
        <img src="${img}" alt="${name}">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price">$${price}</div>
      </div>
    `;
  }
}
customElements.define('product-card', ProductCard);
