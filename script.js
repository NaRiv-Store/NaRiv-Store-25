let cart = [];
function addToCart(product, price) {
  cart.push({ product, price });
  updateCartUI();
}
function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.product + " - $" + item.price;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
  const text = cart.map(item => `• ${item.product}: $${item.price}`).join('%0A');
  const whatsappLink = `https://wa.me/5491138893335?text=Hola!%20Quiero%20comprar:%0A${text}%0ATotal:%20$${total}`;
  document.getElementById("checkout-btn").href = whatsappLink;
}
function toggleCart() {
  const cartBox = document.getElementById("cart");
  cartBox.classList.toggle("visible");
}
function filtrarCategoria(cat) {
  const productos = document.querySelectorAll('.product');
  productos.forEach(p => {
    if (cat === 'todo') {
      p.style.display = '';
    } else {
      p.style.display = p.dataset.categoria.includes(cat) ? '' : 'none';
    }
  });
}