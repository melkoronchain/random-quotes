const quotes = [
  { text: "Stay hungry, stay foolish", author: "Steve Jobs" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  {
    text: "Programs must be written for people to read.",
    author: "Harold Abelson",
  },
  { text: "Let's fucking go!", author: "Melkor" },
  {
    text: "Learning is light and ignorance is darkness",
    author: "Alexander Suvorov",
  },
];

const authorElement = document.getElementById("author");
const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");

function randomQuotes() {
  const index = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[index];
  authorElement.textContent = "— " + randomQuote.author;
  quoteElement.textContent = randomQuote.text;
}

generateBtn.addEventListener("click", randomQuotes);
