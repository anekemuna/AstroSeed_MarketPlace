document.addEventListener("DOMContentLoaded", function() {
    // Define prices and tax
    const items = {
        lily: 45,
        potato: 15
    };
    const taxRate = 0.0875; // Assuming an 8.75% tax rate for example

    // Function to calculate and update the total
    function updateTotal() {
        let subtotal = items.lily + items.potato; // Calculate subtotal
        let tax = subtotal * taxRate; // Calculate tax
        let shipping = document.querySelector('input[name="shipping"]:checked').value; // Get selected shipping method

        // Calculate shipping costs or discounts
        let shippingCost;
        switch(shipping) {
            case 'fast':
                shippingCost = 10;
                break;
            case 'normal':
                shippingCost = 5;
                break;
            case 'flexible':
                // Apply discount
                subtotal -= 2;
                shippingCost = 0;
                break;
            default:
                shippingCost = 0;
        }

        let total = subtotal + tax + shippingCost;
        document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById("total-billing").textContent = `$${total.toFixed(2)}`;
    }

    // Update total whenever a shipping option is changed
    document.querySelectorAll('input[name="shipping"]').forEach(radio => {
        radio.addEventListener('change', updateTotal);
    });

    // Checkout button functionality
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.addEventListener("click", function() {
        // Perform checkout logic here
        // For now, just show an alert
        alert("Checkout successful! Total billing is: " + document.getElementById("total-billing").textContent);
    });

    // Initial update of total
    updateTotal();
});
