import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-3 text-center"> Books</h1>

      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <Link
              to={`/books/${book.id}`}
              className="card h-100 text-decoration-none text-dark"
            >
              <img
                src={book.imageLink}
                className="card-img-top"
                alt={book.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.excerpt}</p>
                <small className="text-muted">Author: {book.author}</small>
                <p className="card-text">
                  <small className="text-muted">
                    Genres: {book.genres.join(", ")}
                  </small>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
