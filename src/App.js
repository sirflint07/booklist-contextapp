import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import { BookContextProvider } from './contexts/bookContext';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
        <ThemeToggleButton />
      </BookContextProvider>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
