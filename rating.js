const ratingForm = document.getElementById('rating-form');
const submitBtn = document.getElementById('rating-form-submit-btn');
const ratingLabels = document.querySelectorAll('#rating-form label');
const ratingStateSection = document.getElementById('rating-state');
const thankYouStateSection = document.getElementById('thank-you-state');

let rating = -1;



// prevent default action while submitting the rating-form
ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
})


// add click event listener for all labels in rating-form
for (let r of ratingLabels) {
    r.addEventListener('click', (e) => {
        removeClass();
        e.target.className = 'selected';
        rating = e.target.id.split('-')[1];
    })
}

// remove 'selected' className from all rating-form labels
function removeClass() {
    for (let o of ratingLabels) {
        o.classList.remove('selected');
    }
}

submitBtn.addEventListener('click', () => {
    // check if user hasnt selected a rating
    if (rating === -1) {return;}

    // sendForm();

    playSlidingAnimations();
})

function playSlidingAnimations() {
    ratingStateSection.classList.add('sliding-out');
    setTimeout(() => {
        document.getElementById('component-section').removeChild(ratingStateSection)
        thankYouStateSection.style.display = 'block';
        thankYouStateSection.classList.add('sliding-in');
    }, 201);
    document.getElementById('what-selected').innerText = 'You selected ' + rating + ' out of 5';
}