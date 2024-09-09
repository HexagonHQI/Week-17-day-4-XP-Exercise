import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooksByGenre } from '../store'; // Import the selector

const BookList = () => {
  const books = useSelector(selectBooksByGenre);

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author} - {book.genre}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
