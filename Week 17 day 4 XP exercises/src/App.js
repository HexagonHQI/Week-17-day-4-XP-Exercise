import React from 'react';
import GenreSelector from './components/GenreSelector';
import BookList from './components/BookList';

const App = () => {
  return (
    <div>
      <h1>Book Inventory</h1>
      <GenreSelector />
      <BookList />
    </div>
  );
};

export default App;
