// Select elements
const form = document.querySelector('.main__form');
const errorIcon = form.querySelector('.main__form-error-icon');
const errorMessage = document.querySelector('.main__form-error-message');

// Listen to the form submit event
form.addEventListener('submit', event => {
	event.preventDefault();

	toggleClassAndAria(errorIcon);
	toggleClassAndAria(errorMessage);
});

// Toogle 'hide' class and 'aria-hidden' attribute
const toggleClassAndAria = element => {
	const email = form.querySelector('.main__form-input').value;
	const regex = /^([A-Za-z0-9\._]+)@([A-Za-z0-9]+)(\.[a-z]+)(\.[a-z]+)?$/;

	// Toggle 'hide' class
	regex.test(email) ? element.classList.add('hide') : element.classList.remove('hide');

	// Toggle 'aria-hidden' attribute
	element.classList.contains('hide') ? element.setAttribute('aria-hidden', true) : element.setAttribute('aria-hidden', false);
};
