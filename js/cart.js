/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelector('tbody').innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let tbody = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  cart.items.forEach(e => {
    // TODO: Create a TR
    let row = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    let remove = document.createElement('td');
    let quantity = document.createElement('td');
    quantity.textContent = e.quantity;
    let item = document.createElement('td');
    item.textContent = e.product;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(row);
    row.appendChild(remove);
    row.appendChild(quantity);
    row.appendChild(item);
  });
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.items.removeItem(event.target);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
