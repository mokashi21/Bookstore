import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Bookdetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div class="row">
        <div class="col-md-12 col-sm-3">
          <h1 class="text-center text-primary">{book.title}</h1>
          <img
            src={book.imageLink}
            alt={book.title}
            class="w-50 h-50"
            style={{ objectFit: "contain" }}
          />
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Genres:</strong> {book.genres.join(", ")}
          </p>
          <p>
            <strong>Summary:</strong> {book.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bookdetails;
