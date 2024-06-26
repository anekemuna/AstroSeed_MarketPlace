document.addEventListener("DOMContentLoaded", function() {
     // Toggle between list view and grid view
     var toggleViewCheckbox = document.getElementById('gridViewCheckbox');
     var productsContainer = document.querySelector('.right-content');
 
 
     function toggleView() {
         if (toggleViewCheckbox.checked) {
             productsContainer.classList.add('grid-view');
             productsContainer.classList.remove('list-view');
         } else {
             productsContainer.classList.remove('grid-view');
             productsContainer.classList.add('list-view');
         }
     }
 
     // And also bind it to the change event of the checkbox
     toggleViewCheckbox.addEventListener('change', toggleView);
 
     // Make sure to call this function to set the initial view on page load if necessary
     toggleView();


    // Search bar functionality
    var searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('keyup', function(e) {
            var searchTerm = e.target.value.toLowerCase();
            var products = document.getElementsByClassName('product-card');
            Array.from(products).forEach(function(product) {
                var productName = product.querySelector('.product-info h3').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = '';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
    
    //this function helps user show products card to their search name
    var searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('keyup', function(e) {
            var searchTerm = e.target.value.toLowerCase();
            
            fetch(`/search-products?query=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                const productsContainer = document.getElementById('products');
                productsContainer.innerHTML = ''; // Clear current products
                
                data.products.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.className = 'product-card';
                    productElement.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                    `;
                    productsContainer.appendChild(productElement);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        });
    }

    // Attach the showDropdown function to your dropdown button
    var dropbtn = document.querySelector(".dropbtn");
    if (dropbtn) {
        dropbtn.addEventListener("click", showDropdown);
    }

    //implementing the filters functionalities 
    document.querySelectorAll('.categorySelect').forEach(select => {
        select.addEventListener('change', filterProducts);
    });

    function filterProducts() {
        const selects = document.querySelectorAll('.categorySelect');
        const filters = {};

        selects.forEach(select => {
            const category = select.getAttribute('data-category');
            const value = select.value;
            if (value) {
                filters[category] = value;
            }
        });

        console.log(filters); // To check the filters being sent

        // Fetch filtered products from the server
        fetch(`/filter-products?category=${selectedCategory}`)
            .then(response => response.json())
            .then(data => {
                const productsContainer = document.getElementById('products');
                productsContainer.innerHTML = ''; // Clear current products
            
                data.products.forEach(product => {
                    // Only create and append product cards that match the filter
                    const productElement = document.createElement('div');
                    productElement.className = 'product-card';
                    productElement.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                    `;
                    productsContainer.appendChild(productElement);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
 

    
    ////////////////////////////////////////////////////////////////////////
    // Function to sort products by price
    function sortProductsByPrice(ascending) {
        let products = Array.from(document.getElementsByClassName('product-card'));
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.product-price').textContent.replace(/^\$/, ''));
            const priceB = parseFloat(b.querySelector('.product-price').textContent.replace(/^\$/, ''));
            return ascending ? priceA - priceB : priceB - priceA;
        });

        const productsContainer = document.querySelector('.right-content');
        productsContainer.innerHTML = '';
        products.forEach(product => productsContainer.appendChild(product));
    }

    // Function to reset to list view without reloading
    function resetToListView() {
        const productsContainer = document.querySelector('.right-content');
        const gridViewCheckbox = document.getElementById('gridViewCheckbox');
        gridViewCheckbox.checked = false;
        productsContainer.classList.remove('grid-view');
        productsContainer.classList.add('list-view');
    }

    // Event listeners for sorting checkboxes
    const lowToHighCheckbox = document.getElementById('lowToHigh');
    const highToLowCheckbox = document.getElementById('highToLow');

    lowToHighCheckbox.addEventListener('change', function() {
        if (this.checked) {
            highToLowCheckbox.checked = false;
            sortProductsByPrice(true);
        } else {
            if (toggleViewCheckbox.checked){
                resetToGridDefault();
            }else{ 
                sortProductsByDate(true);
            }
        }
    });

    highToLowCheckbox.addEventListener('change', function() {
        if (this.checked) {
            lowToHighCheckbox.checked = false;
            sortProductsByPrice(false);
        } else {
            if (toggleViewCheckbox.checked){
                resetToGridDefault();
            }else{ 
                sortProductsByDate(true);
            }
        }
    });
    ////////////////////////////////////////////////////////////////////////


    // Implementing the filters functionalities drop down boxes
    document.querySelectorAll('.categorySelect').forEach(select => {
        select.addEventListener('change', filterProducts);
    });

    function filterProducts() {
        const selects = document.querySelectorAll('.categorySelect');
        const filters = {};

        selects.forEach(select => {
            const category = select.getAttribute('data-category');
            const value = select.value;
            if (value) {
                filters[category] = value;
            }
        });

        console.log(filters); // To check the filters being sent

        // Fetch filtered products from the server
        fetch(`/filter-products?category=${selectedCategory}`)
            .then(response => response.json())
            .then(data => {
                productsContainer.innerHTML = ''; // Clear current products
            
                data.products.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.className = 'product-card';
                    productElement.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                    `;
                    productsContainer.appendChild(productElement);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


    ///////////////////////////////////////////////
    function toggleDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
      
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }


    //sorting by date!
    //Function to sort products by date
    function sortProductsByDate(isLatest) {
        const productsContainer = document.querySelector('.right-content');
        let products = Array.from(productsContainer.getElementsByClassName('product-card'));

        // Sort products by posted date
        products.sort((a, b) => {
            const dateA = new Date(a.dataset.postedDate);
            const dateB = new Date(b.dataset.postedDate);
            return isLatest ? dateB - dateA : dateA - dateB;
        });

        // Clear the products container and append sorted products
        productsContainer.innerHTML = '';
        products.forEach(product => productsContainer.appendChild(product));
    }

    // THIS IS WHERE YOU CHANGE THE FUNCTION WHERE YOU NEED TO FIX WHEN SWITCHING GRID TO LIST VIEW FOR SORTING
    function resetToGridDefault() {
        window.location.reload();  // Reload the page to reset the view
    }

    // Event listeners for sorting checkboxes for date 
    const sortLatest = document.getElementById('sortLatestCheckbox');
    const sortOldest = document.getElementById('sortoldestChechbox');

    sortLatest.addEventListener('change', function() {
        if (this.checked) {
            sortOldest.checked = false;
            sortProductsByDate(true);
        } else {
            // When in list form you can checkbox sortLatest and when unchecked it wont change to grid view
            // it will return to the list format when first unchecking the grid view checkbox
            if (toggleViewCheckbox.checked){
                resetToGridDefault();
            }else{ 
                sortProductsByDate(true);
            }
        }
    });

    sortOldest.addEventListener('change', function() {
        if (this.checked) {
            sortLatest.checked = false;
            sortProductsByDate(false);
        } else {
            // When in list form you can checkbox sortOldest and when unchecked it wont change to grid view
            // it will return to the list format when first unchecking the grid view checkbox
            if (toggleViewCheckbox.checked){
                resetToGridDefault();   
            }else{
                sortProductsByDate(true); 
            }
        }
    });
    
    
});


/////////////////////////////////////////////////Filters for the 4 catgeories//////////////////////////////////////////
document.querySelectorAll('.categorySelect').forEach(selectElement => {
    selectElement.addEventListener('change', function() {
        const selectedCategory = this.value;
        const categoryType = this.parentElement.querySelector('.filter-category').textContent.trim();
        
        const allProductCards = document.querySelectorAll('.product-card');

        allProductCards.forEach(card => {
            const productCategory = card.getAttribute('data-category');
            
            if (selectedCategory === '' || productCategory === selectedCategory) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'Checkout.html';
    });
});
