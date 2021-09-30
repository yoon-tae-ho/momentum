const loginForm = document.querySelector('#login_form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function saveUserName(user) {
  localStorage.setItem(USERNAME_KEY, user);
}

function paintGreetings(userName) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);

  let greetingMention = '';
  const date = new Date();
  const currentTime = date.getHours();
  if (currentTime < 6) {
    greetingMention = 'Good night';
  } else if (currentTime < 12) {
    greetingMention = 'Good morning';
  } else if (currentTime < 18) {
    greetingMention = 'Good afternoon';
  } else {
    greetingMention = 'Good evening';
  }

  greeting.innerText = `${greetingMention}, ${userName}.`;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  paintGreetings(userName);
  saveUserName(userName);
}

function loadUserName() {
  const currentUser = localStorage.getItem(USERNAME_KEY);
  if (currentUser !== null) {
    paintGreetings(currentUser);
  }
}

function init() {
  loadUserName();
  loginForm.addEventListener('submit', handleLoginSubmit);
}

init();