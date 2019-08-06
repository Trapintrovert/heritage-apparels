const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

name.addEventListener('blur', valName);
email.addEventListener('blur', valEmail);
subject.addEventListener('blur', valSubject);
message.addEventListener('blur', valMessage);


function valName() {
  const re = /([a-zA-Z]{3,20})/;
  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function valEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function valSubject() {
  const re = /([a-zA-Z0-9_\-\.]{1,40})/;
  if(!re.test(subject.value)) {
    subject.classList.add('is-invalid');
  } else {
    subject.classList.remove('is-invalid');
  }
}

function valMessage() {
  const re = /[a-zA-Z0-9_-.]/;
  if(!re.test(message.value)) {
    message.classList.add('is-invalid');
  } else {
    message.classList.remove('is-invalid');
  }
}
// /^[a-z0-9_-]{3,16}$/
