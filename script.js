let cart = [];

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });

  const message = encodeURIComponent(
    "Hello O.S Empire, I want to order:\n" + cart.join(", ")
  );

  document.getElementById("whatsappBtn").href =
    "https://wa.me/234XXXXXXXXXX?text=" + message;
}
