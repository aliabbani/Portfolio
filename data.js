const myForm = document.querySelector('form');

myForm.addEventListener('keyup', (e) => {
  e.preventDefault();
  const nameValue = document.getElementById('username').value;
  const emailValue = document.getElementById('email').value;
  const messageValue = document.getElementById('comment').value;

  const formData = {
    nameValue,
    emailValue,
    messageValue,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
});

const retrievedData = JSON.parse(localStorage.getItem('formData'));

window.onload = () => {
  document.getElementById('username').value = retrievedData.nameValue;
  document.getElementById('email').value = retrievedData.emailValue;
  document.getElementById('comment').value = retrievedData.messageValue;
};
