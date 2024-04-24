function showSection(section) {
    var container = document.getElementById('container');
    container.innerHTML = ''; // Clear main content
    container.classList.remove("centered");

    switch (section) {
        case 'home':
            window.location.href = '/seller/';
            break;
        case 'logOut':
            window.location.href = '/';
            break;
        case 'feedback':
            container.innerHTML = '<div class="feedback-wrapper">' +
                                        '<h1>We Value Your Feedback! </h1>' +
                                        '<form action="#">' +
                                            '<div class="rating">' +
                                                '<input type="number" name="rating" hidden>' +
                                                '<i class="bx bx-star star" style="--i: 0;"></i>' +
                                                '<i class="bx bx-star star" style="--i: 1;"></i>' +
                                                '<i class="bx bx-star star" style="--i: 2;"></i>' +
                                                '<i class="bx bx-star star" style="--i: 3;"></i>' +
                                                '<i class="bx bx-star star" style="--i: 4;"></i>' +
                                            '</div>' +
                                            '<textarea name="opinion" cols="30" rows="5" placeholder="Your opinion..."></textarea>' +
                                            '<div class="feedback-btn-group">' +
                                                '<button type="submit" class="btn submit">Submit</button>' +
                                                '<button class="btn cancel">Cancel</button>' +
                                            '</div>' +
                                        '</form>' +
                                    '</div>';
            attachRatingEventListeners();
            container.classList.add("centered");
            break;
        case 'information':
            container.innerHTML = '<h1>Information Request Form</h1> ' +
                '<br>'+
                '<form class="information-form">' +
                '<br> Name: <input type="text"><br>' +
                'Email: <input type="email"><br>' +
                'Country: <br>' +
                ' <select>'+
                '<option value="Suggestions">Suggestions</option>'+
                '<option value="Questions">Questions</option>'+
                '<option value="Complaints">Complaints</option>'+
                '</select> <br><br>' +
                'Text: <br> <textarea name="infor_request" cols="30" rows ="6" placeholder="What do you need?"></textarea><br>' +
                    '<div class="feedback-btn-group">' +
                        '<button type="submit" class="btn submit">Submit</button>' +
                    '</div>' +
                '</form>';
            break;
        case 'faq':
            container.innerHTML = '<h1>FAQ Section</h1>' +
                '<select onchange="showFAQ(this.value)">' +
                '<option value="buyer">Buyer</option>' +
                '<option value="seller">Seller</option>' +
                '</select>' +
                '<div class="faq-section" id="faqSection"></div>';

                // Call showFAQ function with default value
                showFAQ('buyer');
            break;
    }
}

function attachRatingEventListeners() {
    const allStar = document.querySelectorAll('.rating .star');
    const ratingValue = document.querySelector('.rating input');

    allStar.forEach((item, idx)=> {
        item.addEventListener('click', function () {
            let click = 0;
            ratingValue.value = idx + 1;

            allStar.forEach(i=> {
                i.classList.replace('bx-star', 'bx-star');
                i.classList.remove('active');
            });
            for(let i=0; i<allStar.length; i++) {
                if(i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star');
                    allStar[i].classList.add('active');
                } else {
                    allStar[i].style.setProperty('--i', click);
                    click++;
                }
            }
        });
    });
}

function showFAQ(category) {
    var faqSection = document.getElementById('faqSection');
    faqSection.innerHTML = '';

    switch (category) {
        case 'buyer':
            faqSection.innerHTML = '<div id="faq" class="faq-body">' +
                '<div class="faq-header">' +
                '<h3 class="faq-title">Buyer FAQ\'s</h3>' +
                '<div class="seperator"></div>' +
                '</div>' +
                '<div class="faq-list">' +
                '<div>' +
                '<details open>' +
                '<summary title="How can I track my order?>How can I track my order?</summary>' +
                '<p class="faq-content">Log into your account to view order history and tracking details. You will also receive email notifications.</p>' +
                '</details>' +
                '</div>' +
                '<div>' +
                '<details>' +
                '<summary title="What payment methods do you accept?">What payment methods do you accept?</summary>' +
                '<p class="faq-content">We accept credit/debit cards, PayPal, and bank transfers. Payment options may vary by location and product.</p>' +
                '</details>' +
                '</div>' +
                // Add more FAQ items here
                '</div>' +
                '</div>';
            break;
        case 'seller':
            faqSection.innerHTML = '<div id="faq" class="faq-body">' +
            '<div class="faq-header">' +
            '<h3 class="faq-title">Seller FAQ\'s</h3>' +
            '<div class="seperator"></div>' +
            '</div>' +
            '<div class="faq-list">' +
            '<div>' +
            '<details>' +
            '<summary title="What fees are associated with selling on your platform?>What fees are associated with selling on your platform?</summary>' +
            '<p class="faq-content">We charge a nominal fee for each successful transaction. Additionally, there may be optional fees for premium features like promoted listings or additional seller services.</p>' +
            '</details>' +
            '</div>' +
            '<div>' +
            '<details>' +
            '<summary title="What payment methods do you accept?">What payment methods do you accept?</summary>' +
            '<p class="faq-content">We accept credit/debit cards, PayPal, and bank transfers. Payment options may vary by location and product.</p>' +
            '</details>' +
            '</div>' +
            // Add more FAQ items here
            '</div>' +
            '</div>';
            break;
    }
}

// Show feedback page by default
showSection('feedback');
