
// Getting DOM variables
const button = document.querySelector('.btn');
const card = document.querySelector('.card');
const secondaryCard = document.querySelector('.card--secondary');
const selection = document.querySelector('.selection');
const backArrow = document.querySelector('.fa-solid');
const ratingList = document.querySelectorAll('ul > li');

// showing thank you card once button is clicked
button.addEventListener('click', function() {
    card.classList.add('is-hidden');
    secondaryCard.classList.remove('is-hidden');
})

// returning to default rating card when clicking on backarrow
backArrow.addEventListener('click', function(e) {
    ratingList.forEach(item => {
            item.classList.remove('rating-active');
        })
    secondaryCard.classList.add('is-hidden');
    card.classList.remove('is-hidden');
    button.disabled = true;
    })

// showing which rating has been selected out of 5 and changing background color of rating cirle
ratingList.forEach(item => {
	item.addEventListener('click',(e)=>{
        ratingList.forEach(item => {
            item.classList.remove('rating-active');
        })
		const rating = (e.target.textContent);
        const background = e.target;
        background.classList.add('rating-active');
        selection.innerHTML = `You selected ${rating} out of 5`;
        button.removeAttribute('disabled');
	}
	)
})

