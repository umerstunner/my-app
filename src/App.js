import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import './App.css';

// Main App with routing and state
function App() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  // Add book handler
  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
    setMessage('Book added successfully!');
    setTimeout(() => setMessage(''), 2000);
  };

  // Delete book handler
  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
    setMessage('Book deleted.');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <nav className="nav">
          <Link to="/">Dashboard</Link>
          <Link to="/books">Book List</Link>
          <Link to="/add">Add Book</Link>
        </nav>
        {message && <div className="success">{message}</div>}
        <Routes>
          <Route path="/" element={<Dashboard books={books} />} />
          <Route path="/books" element={<BookList books={books} deleteBook={deleteBook} />} />
          <Route path="/add" element={<BookForm addBook={addBook} />} />
          <Route path="/books/:id" element={<BookDetails books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
