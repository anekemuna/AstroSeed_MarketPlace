
document.addEventListener('DOMContentLoaded', function() {
    var emailFilterInput = document.getElementById('emailFilter');

    // Function to filter customer information
    function filterCustomerInfo() {
        var filterValue = emailFilterInput.value.toLowerCase();
        var customerRows = document.querySelectorAll('.information .grid div:not(.grid-header)');
        for (var i = 0; i < customerRows.length; i+=5) {
            var emailCell = customerRows[i+1];
            if (emailCell.textContent.toLowerCase().includes(filterValue)) {
                emailCell.parentNode.style.display = '';
            } else {
                emailCell.parentNode.style.display = 'none';
            }
        }
    }

    // Event listener for the email filter input
    emailFilterInput.addEventListener('keyup', filterCustomerInfo);
});
