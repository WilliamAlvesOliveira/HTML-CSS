document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            const cartItem = document.createElement('li');
            cartItem.textContent = `${name} - $${price.toFixed(2)}`;
            cartList.appendChild(cartItem);

            total += price;
            totalPriceElement.textContent = total.toFixed(2);
        });
    });
});
