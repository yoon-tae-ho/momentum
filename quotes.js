const quoteContainer = document.querySelector('#quote span:first-child');
const authorContainer = document.querySelector('#quote h6:last-child');


const quotes = [
  {
    quote: "Be yourself, everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky"
  },
];

function paintQuote() {
  const index = getRandomIndex();
  const currentQuote = quotes[index].quote;
  const currentAuthor = quotes[index].author;

  quoteContainer.innerText = `"${currentQuote}"`;
  authorContainer.innerText = `― ${currentAuthor}`;
}

function getRandomIndex() {
  return Math.floor(Math.random() * quotes.length);
}

function init() {
  paintQuote();
}

init();