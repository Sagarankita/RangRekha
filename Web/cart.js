/*const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");

    form.addEventListener("submit", (event) => {
        let isValid = true;
        let errorMessage = "";

        if (nameField.value.trim() === "") {
            isValid = false;
            errorMessage += "Name is required.\n";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
        }

        if (passwordField.value.trim().length < 8) {
            isValid = false;
            errorMessage += "Password must be at least 8 characters long.\n";
        }

        if (passwordField.value !== confirmPasswordField.value) {
            isValid = false;
            errorMessage += "Passwords do not match.\n";
        }

        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    }); */
document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 


    document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            const productName = event.target.getAttribute('data-name');
            const productPrice = parseFloat(event.target.getAttribute('data-price'));
            const productImage = event.target.getAttribute('data-image');
            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
      
                existingProduct.quantity++;
            } else {
         
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1,
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} has been added to your cart!`);
        });
    });

    function renderCart() {
        const cartContainer = document.querySelector('.cart-product-container');
    
        if (!cartContainer) {
            console.error("Error: .cart-product-container element not found in the DOM.");
            return;
        }
    
        cartContainer.innerHTML = '';
    
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }
    
        let totalQuantity = 0;
        let totalPrice = 0;
    
        cart.forEach((item, index) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
    
            cartContainer.innerHTML += `
                <li class="list-group-item d-flex justify-content-between lh-sm align-items-center">
                    <div>
                        <h6 class="my-0">${item.name}</h6>
                        <small class="text-body-secondary">
                            Quantity:
                            <button class="btn btn-sm btn-outline-secondary subtract btn btn-warning" data-index="${index}">-</button>
                            <span id="qty-${index}">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary add btn btn-warning" data-index="${index}">+</button>
                        </small>
                    </div>
                    <span class="text-body-secondary">INR ${ (item.price * item.quantity).toFixed(2) }</span>
                </li>`;
        });
    
        const cartQuantityElement = document.querySelector('.badge.bg-primary.rounded-pill');
        if (cartQuantityElement) {
            cartQuantityElement.innerHTML = `${totalQuantity}`;
        }
 
        const cartTotalElement = document.querySelector('.cart-total');
        if (cartTotalElement) {
            cartTotalElement.innerHTML = `INR ${totalPrice.toFixed(2) - 50}`;
        }

        document.querySelectorAll('.add').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                cart[index].quantity++;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart(); 
            });
        });
    
        document.querySelectorAll('.subtract').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1); 
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart(); 
            });
        });

        
    }
    
    if (document.querySelector('.cart-product-container')) {
        renderCart();
    }
});
if(cart.length>0){
  const orderPlaced = document.querySelector('.orderplaced');
  orderPlaced.addEventListener('click',()=>{
    alert('Your order has been placed!!\nThankyou, Visit Again. Team RangRekha ❤.')
})
  
}
