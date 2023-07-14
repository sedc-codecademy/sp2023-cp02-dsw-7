let cartIcon = document.getElementById("cart-img");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};
closeCart.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartBtns = document.getElementsByClassName("cart-remove");
  console.log(removeCartBtns);
  for (var i = 0; i < removeCartBtns.length; i++) {
    var button = removeCartBtns[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }

  document
  .getElementsByClassName("buy-btn")[0]
  .addEventListener("click", buyButtonClicked)
}

function buyButtonClicked(){
    alert("Your order is placed")
    var cartContent = document.getElementsByClassName("cart-content")[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal()

}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("cart-price")[0].innerText;
    var productImgElement = shopProducts.getElementsByClassName("card-img-top")[0];
    var productImg = productImgElement ? productImgElement.src : '';
    console.log(shopProducts)
  
    addProductToCart(title, price, productImg);
  }
  
  
  function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText == title) {
        alert(`You have already added this item to your cart. If you want to increase the amount of the product, you can do that in the cart.`);
        return;
      }
    }
  
    var cartBoxContent = `
      <div class="cart-img-container">
        <img src="${productImg}" class="cart-img" alt="img">
      </div>
      <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
      </div>
      <i class='bx bxs-trash cart-remove'></i>`;
  
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.appendChild(cartShopBox);
  
    cartShopBox
      .getElementsByClassName("cart-remove")[0]
      .addEventListener("click", removeCartItem);
    cartShopBox
      .getElementsByClassName("cart-quantity")[0]
      .addEventListener("change", quantityChanged);
  
    updateTotal();
  }
  

function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("Mkd", "") );
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  document.getElementsByClassName("total-price")[0].innerText = total + " Mkd";
}
