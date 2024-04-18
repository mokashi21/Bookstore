const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const books = [
  {
    id: "1",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    genres: ["Dystopian", "Political"],
    excerpt:
      "A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish.",
    imageLink:
      "https://m.media-amazon.com/images/I/91NtvTU0xEL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "2",
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    genres: ["Novel", "Fiction"],
    excerpt:
      "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    imageLink:
      "https://m.media-amazon.com/images/I/71CedT9yPIL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "3",

    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genres: ["Thriller", "Legal"],
    excerpt: "A novel about the serious issues of rape and racial inequality.",
    imageLink:
      "https://m.media-amazon.com/images/I/51i-9SGWr-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "4",

    title: "The Epic Of Gilgamesh",
    author: "Unknown",
    genres: ["Classic", "Mythology"],
    excerpt: "One of the earliest known works of literary fiction.",
    imageLink:
      "https://m.media-amazon.com/images/I/71HlXHs97GL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "5",

    title: "The Book Of Job",
    author: "Unknown",
    genres: ["Religious", "Classic"],
    excerpt: "A book from the Bible detailing Job's trials and tribulations.",
    imageLink:
      "https://m.media-amazon.com/images/I/81Y310EdIGL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "6",

    title: "One Thousand and One Nights",
    author: "Unknown",
    genres: ["Folk Tales", "Fantasy"],
    excerpt:
      "A collection of Middle Eastern folk tales compiled in Arabic during the Islamic Golden Age.",
    imageLink:
      "https://m.media-amazon.com/images/I/712MHjtuXlL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "7",

    title: "Njál's Saga",
    author: "Unknown",
    genres: ["Saga", "Historical"],
    excerpt: "An epic Icelandic saga from the late 13th century.",
    imageLink:
      "https://m.media-amazon.com/images/I/71cu2PgXuUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "8",

    title: "Pride and Prejudice",
    author: "Jane Austen",
    genres: ["Novel", "Romance"],
    excerpt: "A romantic novel of manners.",
    imageLink:
      "https://m.media-amazon.com/images/I/61H3BvN-naL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "9",
    title: "Le Père Goriot",
    author: "Honoré de Balzac",
    genres: ["Novel", "Realist"],
    excerpt: "The story of an old man and his struggles in Parisian society.",
    imageLink:
      "https://m.media-amazon.com/images/I/71IqYfrROTL._AC_UF1000,1000_QL80_.jpg",
  },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});
app.get("/api/books/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
