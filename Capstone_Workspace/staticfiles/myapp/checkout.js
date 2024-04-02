document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        // Here you can perform further actions like sending the data to a server or processing it.
        console.log(data);
        // For demonstration purposes, let's just reset the form
        form.reset();
    });
});
