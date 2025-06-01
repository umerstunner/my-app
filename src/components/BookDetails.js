import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetails({ books }) {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));
  if (!book) {
    return (
      <div className="details-container">
        <h2>Book Not Found</h2>
        <Link to="/books" className="back-link">Back to List</Link>
      </div>
    );
  }
  return (
    <div className="details-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Description:</strong></p>
      <p>{book.description}</p>
      <Link to="/books" className="back-link">Back to List</Link>
    </div>
  );
}

export default BookDetails;
