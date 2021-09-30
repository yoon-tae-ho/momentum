const body = document.querySelector('body');

const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg'
]

function paintImage() {
  const index = getRandomIndex();
  const chosenImage = images[index];

  const imgContainer = document.createElement('img');
  imgContainer.src = `${chosenImage}`;
  imgContainer.id = 'backgroundImg';

  body.appendChild(imgContainer);
}

function getRandomIndex() {
  return Math.floor((Math.random() * images.length));
}

function init() {
  paintImage();
}

init()