var quotes = [
  {
    quote: '"Beware of what you become in pursuit of what you want."',
    author: "--Jim Rohn",
  },
  {
    quote:
      '"It\'s not what happens to you, but how you react to it that matters."',
    author: "--Epictetus",
  },
  {
    quote: '"The best revenge is massive success."',
    author: "--Frank Sinatra",
  },
  {
    quote: '"You miss 100% of the shots you don\'t take."',
    author: "--Wayne Gretzy",
  },
  {
    quote:
      '"Resentment is like drinking poison and waiting for your enemies to die."',
    author: "--Nelson Mandela",
  },
  {
    quote: '"Do not take life too seriously. You will not get out alive."',
    author: "--Elbert Hubbard",
  },
];

function buttonClick() {
  for (var i = 0; i < quotes.length; i++) {
    document.getElementById("quote").innerHTML = quotes[i].quote;
    document.getElementById("authors").innerHTML = quotes[i].author;
  }
}
