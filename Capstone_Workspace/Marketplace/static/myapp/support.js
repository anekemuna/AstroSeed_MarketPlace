function showSection(section) {
    var container = document.getElementById('container');
    container.innerHTML = ''; // Clear main content

    switch (section) {
        case 'home':
            container.innerHTML = '<h1>Welcome to Home Page</h1>';
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
            container.innerHTML = '<h1>Information Request Form</h1>' +
                '<form class="information-form">' +
                'Name: <input type="text"><br>' +
                'Email: <input type="email"><br>' +
                'Phone Number: <input type="tel"><br>' +
                'Text: <textarea name="infor_request" cols="30" rows ="5" placeholder="What do you need?"></textarea><br>' +
                    '<div class="feedback-btn-group">' +
                        '<button type="submit" class="btn submit">Submit</button>' +
                    '</div>' +
                '</form>';
                container.classList.remove("centered");
            break;
        case 'faq':
            container.innerHTML = '<h1>FAQ Section</h1>' +
                '<select onchange="showFAQ(this.value)">' +
                '<option value="buyer">Buyer</option>' +
                '<option value="seller">Seller</option>' +
                '</select>' +
                '<div class="faq-section" id="faqSection"></div>';
                container.classList.remove("centered");
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
            faqSection.innerHTML = '<h2>Buyer FAQs</h2>' +
                '<ul>' +
                '<li>Question 1?</li>' +
                '<li>Question 2?</li>' +
                '<li>Question 3?</li>' +
                '</ul>';
            break;
        case 'seller':
            faqSection.innerHTML = '<h2>Seller FAQs</h2>' +
                '<ul>' +
                '<li>Question A?</li>' +
                '<li>Question B?</li>' +
                '<li>Question C?</li>' +
                '</ul>';
            break;
    }
}

// Show home page by default
showSection('home');
