let cart = [];

function renderCart() {
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotal = document.getElementById("cartTotal");
  
  
 
  cartItemsList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const cartItem = document.createElement("li");
    cartItem.className = "list-group-item d-flex justify-content-between align-items-center";
    cartItem.innerHTML = `
      ${item.name} - ${item.price}€
      <button class="btn  btn-sm delete-item" data-index="${index}">❌</button>
    `;

    cartItemsList.appendChild(cartItem);
  });

  cartTotal.textContent = `Total: ${total}€`;
}


function addToCart(item) {
  cart.push(item);
  renderCart();
}


function deleteFromCart(index) {
  cart.splice(index, 1); 
  renderCart();
}


document.getElementById("cartItemsList").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-item")) {
    const index = e.target.getAttribute("data-index");
    deleteFromCart(index);
  }
});

document.querySelectorAll('#add-to-cart').forEach((button) => {
  button.addEventListener('click', (e) => {
    const itemCard = e.target.closest('.card');
    const itemName = itemCard.querySelector('.card-title').textContent;
    const itemPrice = parseFloat(itemCard.querySelector('.fw-bold').textContent.replace('€', ''));


       if (!isNaN(itemPrice)) {
      addToCart({ name: itemName, price: itemPrice });
    } else {
      console.error("Invalid price format:", priceText);
    }
  });
});
