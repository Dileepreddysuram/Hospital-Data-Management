// Get the form element
const form = document.querySelector('.booking');

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const doctorInput = document.getElementById('doctor');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');

  // Get the values of the input fields
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const doctor = doctorInput.value.trim();
  const date = dateInput.value.trim();
  const time = timeInput.value.trim();

  // Validate the input fields
  let isValid = true;

  if (name === '') {
    isValid = false;
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
  }

  if (email === '' || !email.includes('@')) {
    isValid = false;
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }

  if (phone === '' || !/^\d{10}$/.test(phone)) {
    isValid = false;
    phoneInput.classList.add('invalid');
  } else {
    phoneInput.classList.remove('invalid');
  }

  if (doctor === '') {
    isValid = false;
    doctorInput.classList.add('invalid');
  } else {
    doctorInput.classList.remove('invalid');
  }

  if (date === '') {
    isValid = false;
    dateInput.classList.add('invalid');
  } else {
    dateInput.classList.remove('invalid');
  }

  if (time === '') {
    isValid = false;
    timeInput.classList.add('invalid');
  } else {
    timeInput.classList.remove('invalid');
  }

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
});
