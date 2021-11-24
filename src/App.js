import React from 'react';
import BookList from "./components/BookList";
import Navbar from "./components/NavBar";
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
