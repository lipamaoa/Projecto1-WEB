
const cart = [];


function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartUI();
}


function updateCartUI() {
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotal = document.getElementById('cartTotal');


  cartItemsList.innerHTML = '';

  let total = 0;
  cart.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
  });

 
  cartTotal.textContent = `Total: $${total}`;
}


document.querySelectorAll('#add-to-cart').forEach((button) => {
  button.addEventListener('click', (e) => {
    const itemCard = e.target.closest('.card');
    const itemName = itemCard.querySelector('.card-title').textContent;
    const itemPrice = parseFloat(itemCard.querySelector('.fw-bold').textContent.replace('$', ''));
    addToCart(itemName, itemPrice);
  });
});
