const form = document.querySelector('form');
const email = document.getElementById('email');
const message = document.getElementById('small');

function validateEmail(email) {
  const regEx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if (regEx.test(email)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail(email)) {
    message.innerText = '(*) Please provide a email in lower case';
  } else {
    form.submit();
  }
});
