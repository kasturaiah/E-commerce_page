document.addEventListener('DOMContentLoaded', (event) => {
    const addToCartButton = document.getElementById('add-to-cart-button');
    const modal = document.getElementById('cart-modal');
    const span = document.getElementsByClassName('close')[0];

    addToCartButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});