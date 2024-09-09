import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGenre } from '../store'; // Import the action

const GenreSelector = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state.books.selectedGenre);

  const genres = ['All', 'Horror', 'Science Fiction', 'Fantasy']; // List of genres

  const handleChange = (event) => {
    dispatch(setSelectedGenre(event.target.value));
  };

  return (
    <select value={selectedGenre} onChange={handleChange}>
      {genres.map(genre => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default GenreSelector;
