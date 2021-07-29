const myForm = document.querySelector('form');

myForm.addEventListener('keyup', (e) => {
  e.preventDefault();
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const messageValue = document.getElementById('message').value;

  const formData = {
    nameValue,
    emailValue,
    messageValue,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
});
