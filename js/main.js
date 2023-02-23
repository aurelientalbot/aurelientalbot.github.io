
/* Form contact */

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the form data
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // TODO: do something with the form data (e.g. send an email)

  // reset the form
  form.reset();

  // display a confirmation message
  alert('Thank you for your message!');
});
