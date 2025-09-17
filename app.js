async function loadProducts(){
  try {
    const res = await fetch('products.json');
    const products = await res.json();
    const container = document.getElementById('products');
    container.innerHTML = '';
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
      `;
      container.appendChild(div);
    });
  } catch(e){
    document.getElementById('products').innerHTML = '<p>تعذر تحميل المنتجات</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadProducts);
