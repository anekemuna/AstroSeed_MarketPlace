// Code for the review button
document.querySelectorAll('.review-button').forEach(button => {
    button.addEventListener('click', function() {
        openReviewsModal(this.getAttribute('data-product-id'));
    });
  });
  
  function openReviewsModal(productId) {
    // Logic to open modal and load reviews for given product ID
    console.log('Opening reviews modal for product', productId);
  }
  
  // Code for horizontal scrolling with the mouse wheel
  document.querySelectorAll('.scroll-container').forEach(container => {
    container.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            container.scrollLeft += 100;
        } else {
            container.scrollLeft -= 100;
        }
        e.preventDefault(); // Prevent the page from scrolling down
    });
  });
  
  // Function to open the product detail modal
  function openProductModal(productId) {
    var modal = document.getElementById('productModal');
    document.getElementById('modalImage').src = '{% static "images/" %}' + productId + '.jpg';
    document.getElementById('modalStatus').textContent = 'Processing';
    document.getElementById('modalDateOrdered').textContent = 'Ordered: April 3, 2024';
    
    modal.style.display = 'block';
  
    // Close modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
  }
  
  // Function to close the product detail modal
  function closeModal() {
    var modal = document.getElementById('productModal');
    modal.style.display = 'none';
  }
  