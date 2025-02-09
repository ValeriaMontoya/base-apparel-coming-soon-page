const form = document.getElementById('form');
const email = form.querySelector('input');
const errorIcon = form.querySelector('img');
const errorMessage = form.querySelector('span');
const successMessage = document.createElement('span');

const validateEmail = () => {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegExp.test(email.value);
};

const setClasses = (isValid) => {
  if (isValid) {
    errorIcon.classList.remove('visible');
    errorMessage.classList.remove('visible');
    email.classList.remove('error');
  } else {
    errorIcon.classList.add('visible');
    errorMessage.classList.add('visible');
    email.classList.add('error');
  }
}

const handleError = (isValid) => {
  if (isValid) {
    errorMessage.textContent = '';
    successMessage.textContent = 'Thank you for signing up!';
    successMessage.style.color = 'green';
    form.appendChild(successMessage);
  } else {
    errorMessage.textContent = 'Please provide a valid email';
    successMessage.textContent = '';
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  
  const emailInput = validateEmail();
  setClasses(emailInput);
  handleError(emailInput);
  email.value = '';
};

form.addEventListener('submit', handleSubmit);
