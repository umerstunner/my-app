import React, { useState } from 'react';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !genre.trim() || !year.trim() || !description.trim()) {
      setError('All fields are required.');
      return;
    }
    if (isNaN(year) || year < 1000 || year > new Date().getFullYear()) {
      setError('Enter a valid year.');
      return;
    }
    addBook({ title, author, genre, year, description });
    setTitle('');
    setAuthor('');
    setGenre('');
    setYear('');
    setDescription('');
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Add Book</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
        />
        <button type="submit" className="add-btn">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
