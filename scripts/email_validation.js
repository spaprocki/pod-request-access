const emailInputElement = document.getElementById('email-input');
const submitButtonElement = document.getElementById('submit-button');
const errorMessageElement = document.getElementById('error-message');

submitButtonElement.addEventListener('click', evaluateEmail);
emailInputElement.addEventListener('input', () => {
  errorMessageElement.classList.remove('visible');
});

function evaluateEmail(event) {
  event.preventDefault();
  resetEmailError(emailInputElement);
  if (!emailIsValid(emailInputElement)) {
    if (emailInputElement.value == '') {
      emailEmptyError(emailInputElement);
    }
    showError(emailInputElement);
  } else {
    clearError(emailInputElement);
  }
}

function emailIsValid(emailInput) {
  const emailInputText = emailInput.value;
  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (emailInputText.match(emailRegex)) {
    return true;
  } else return false;
}

function resetEmailError(emailInput) {
  emailInput.nextElementSibling.textContent = 'Oops! Please check your email';
}

function emailEmptyError(emailInput) {
  emailInput.nextElementSibling.textContent = 'Oops! Please add your email';
}

function showError() {
  errorMessageElement.classList.add('visible');
}

function clearError() {
  errorMessageElement.classList.remove('visible');
}
