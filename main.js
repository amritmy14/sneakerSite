function handleButtonClick(event) {

    const buttons = document.querySelectorAll('.thumbnail');


    if (event.currentTarget.classList.contains('bordered')) {

        event.currentTarget.classList.remove('bordered');
    } else {

        buttons.forEach(button => button.classList.remove('bordered'));
        event.currentTarget.classList.add('bordered');
    }
}

// image change
document.querySelectorAll('.thumbnail').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
  }


// quantity number
let quantity = 0;
const quantityInput = document.getElementById('quantity');
document.getElementById('increase-quantity').addEventListener('click', function() {
    quantity++;
    updateQuantity();
});

document.getElementById('decrease-quantity').addEventListener('click', function() {
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }
});
function updateQuantity() {
    quantityInput.value = quantity;
}


let cartCount = 0;
let cartItems = [];
const cartDropdown = document.getElementById('cart-dropdown');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart1');

document.getElementById('add-to-cart').addEventListener('click', function() {
    cartCount++;
    cartItems.push({
        name: 'Fall Limited Edition Sneakers',
        price: pricePerItem,
        quantity: quantity
    });
    updateCart();
});

document.getElementById('cart1').addEventListener('click', function() {
    cartDropdown.classList.toggle('hidden');
});

function updateCart() {
    cartCountElement.textContent = `(${cartCount})`;
    let total = 0;
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
    });
    totalPriceElement.textContent = total.toFixed(2);
}