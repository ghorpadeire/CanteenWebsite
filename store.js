if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase');
    // alert('<input type="text" name="id" id="id">');
    var k = 0;
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var id = document.getElementById('id').value;
    while (cartItems.hasChildNodes()) {
        if (k != 0) {
            var item_name = document.getElementsByClassName('cart-item-title')[0].innerHTML;
            var item_price = document.getElementsByClassName('cart-price')[1].innerHTML;
            var item_quantity = document.getElementsByClassName('cart-quantity-input')[0].value
            var price = parseFloat(document.getElementsByClassName('cart-price')[1].innerText.replace('Ru', ''))
            console.log(item_name);
            console.log(item_price);
            console.log(item_quantity);
            // total = total + (price * quantity)
            var total_item_price=price * item_quantity;
            console.log(price * item_quantity);
            submitLogin(id, item_name, item_price, item_quantity,total_item_price);
        }
        k = 1;
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


function submitLogin(id, item_name, item_price, item_quantity,total_item_price) {
    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;

    // var params = "item_name=" + item_name + "&item_price=" + item_price + "&item_quantity=" + item_quantity;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "store.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // item_name=" + item_name + "item_price=" + item_price,
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("abc").innerHTML = xmlhttp.responseText;
        }
        else {
            console.log("Not inserted");
        }
    }
    xmlhttp.send("id=" + id + "&item_name=" + item_name + "&item_price=" + item_price + "&item_quantity=" + item_quantity+"&total_item_price="+total_item_price);
}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Ru', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total +  'Rs'
}