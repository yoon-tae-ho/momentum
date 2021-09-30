const clock = document.querySelector('#clock');

function getTime() {
  const date = new Date();
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();
  
  // return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  // return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  
  // use API padStart()
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');
  
  // return `${hours}:${minutes}:${seconds}`;
  return `${hours}:${minutes}`;
}

function paintClock() {
  const currentTime = getTime();
  clock.innerText = currentTime;
}

function init() {
  paintClock();
  setInterval(paintClock, 1000);
}

init();