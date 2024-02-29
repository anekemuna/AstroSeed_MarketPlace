

document.addEventListener("DOMContentLoaded", function() {
    // Function to show the dropdown menu
    function showDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    // Attach the showDropdown function to your dropdown button
    document.querySelector(".dropbtn").addEventListener("click", showDropdown);

    // Search bar functionality
    var searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keyup', function(e) {
        var searchTerm = e.target.value.toLowerCase();
        var products = document.getElementsByClassName('product-card'); // Make sure this class matches your product cards
        Array.from(products).forEach(function(product) {
            // Assuming your product names are inside <h3> tags directly under .product-info
            var productName = product.querySelector('.product-info h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
