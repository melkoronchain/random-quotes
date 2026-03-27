const quotes = [
  { text: "Stay hungry, stay foolish", author: "Steve Jobs" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  {
    text: "Programs must be written for people to read.",
    author: "Harold Abelson",
  },
  {
    text: "Learning is light and ignorance is darkness.",
    author: "Alexander Suvorov",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  {
    text: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
  },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    text: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel",
  },
  { text: "Knowledge is power.", author: "Francis Bacon" },
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  { text: "Stay focused and never give up.", author: "Unknown" },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
];

const authorElement = document.getElementById("author");
const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");

function randomQuotes() {
  const index = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[index];
  const { text, author } = randomQuote;
  authorElement.textContent = "— " + author;
  quoteElement.textContent = `"${text}"`;
}

generateBtn.addEventListener("click", randomQuotes);
