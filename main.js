function handleButtonClick(event) {

    const buttons = document.querySelectorAll('.thumbnail1');


    if (event.currentTarget.classList.contains('bordered')) {

        event.currentTarget.classList.remove('bordered');
    } else {

        buttons.forEach(button => button.classList.remove('bordered'));
        event.currentTarget.classList.add('bordered');
    }
}

// image change
document.querySelectorAll('.thumbnail1').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
function changeImage(imageSrc) {
    document.getElementById('mainImage1').src = imageSrc;
  }

// image change 2nd screen
  document.addEventListener('DOMContentLoaded', (event) => {
    const images = [
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg'
    ];
  
    let currentIndex = 0;
  
    const mainImage = document.getElementById('mainImage1');
    const leftArrow = document.querySelector('.slidebut1');
    const rightArrow = document.querySelector('.slidebut2');
  
    function updateMainImage(index) {
      mainImage.src = images[index];
    }
  
    leftArrow.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
      } else {
        currentIndex = images.length - 1;
      }
      updateMainImage(currentIndex);
    });
  
    rightArrow.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex = currentIndex + 1;
      } else {
        currentIndex = 0;
      }
      updateMainImage(currentIndex);
    });
  
    // Initialize main image
    updateMainImage(currentIndex);
  });
  

// quantity number
let quantity = 0;
const quantityInput = document.getElementById('quantity');
const quantityInput2 = document.getElementById('quantitycart');
const quantityInput3 = document.getElementById('pricetot');
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
document.getElementById('deletebut').addEventListener('click', function() {
    quantity=0;
    updateQuantity();
});
function updateQuantity() {
    quantityInput.value = quantity;
    quantityInput2.value = quantity;
    quantityInput3.value ="$" + (quantity*125) + ".00";
}

//cart show and hide
var cartButton = document.getElementById('cart1');
var dropdown = document.getElementById('cart-dropdown');

// Add an event listener to the button to toggle the dropdown
cartButton.addEventListener('click', function() {
        dropdown.classList.toggle('show');
});


document.addEventListener('click', function(event) {
    var isClickInside = dropdown.contains(event.target) || cartButton.contains(event.target);

    if (!isClickInside) {
        dropdown.classList.remove('show');
    }
});