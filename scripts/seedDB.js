const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    googleId: 'Yi6SoAEACAAJ',
    title: "Green Eggs and Ham",
    subTitle: '',
    author: '',
    description:
      "Green Eggs and Ham is almost without doubt the most popular children's book of all time. Dr. Seuss first published it in August, 1960. The vocabulary of the text consists of just fifty different words and was the result of an assignment to Dr. Seuss that Dr. Seuss could complete an entire book using so few words. The 50 words are: a, am, and, anywhere, are, be, boat, box, car, could, dark, do, eat, eggs, fox, goat, good, green, ham, here, house, I, if, in, let, like, may, me, mouse, not, on, or, rain, Sam, say, see, so, thank, that, the, them, there, they, train, tree, try, will, with, would, you. Dr. Seuss wrote many popular books, including If I Ran the Zoo, (1950), Horton Hears a Who (1955), If I Ran the Circus (1956), The Cat in the Hat (1957), and How the Grinch Stole Christmas (1957).",
    publisher: '',
    publishedDate: '',
    image: "http://books.google.com/books/content?id=Yi6SoAEACAAJ&dq&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.ca/books?id=Yi6SoAEACAAJ&dq=green+eggs+and+ham&hl=&source=gbs_api",
    pageCount: '',
    language: ''
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
