import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';


const initialState = {
  books: [
    { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
    { id: 2, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },

  ],
  selectedGenre: 'All'
};

// Slice of books
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    }
  }
});


export const { setSelectedGenre } = bookSlice.actions;


const store = configureStore({
  reducer: {
    books: bookSlice.reducer
  }
});

export default store;

// Selectors
export const selectBooks = (state) => state.books.books;

export const selectBooksByGenre = createSelector(
  [selectBooks, (state) => state.books.selectedGenre],
  (books, selectedGenre) => {
    if (selectedGenre === 'All') return books;
    return books.filter(book => book.genre === selectedGenre);
  }
);
