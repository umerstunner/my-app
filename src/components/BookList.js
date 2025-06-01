import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books, deleteBook }) {
  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p className="empty-list">No books added yet.</p>
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="book-card-header">
                <h3>{book.title}</h3>
                <button className="delete-btn" onClick={() => deleteBook(book.id)}>✖</button>
              </div>
              <div className="book-card-body">
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Year:</strong> {book.year}</p>
                <p className="book-desc">{book.description}</p>
                <Link className="details-link" to={`/books/${book.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
