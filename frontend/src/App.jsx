import React from 'react';
import './App.css';

// Sample data - replace this with your actual API or database call
const sampleBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "1984", author: "George Orwell", year: 1949 },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { id: 6, title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
];

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Library</h1>
      </header>
      
      <main className="book-grid">
        {sampleBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-cover">
              {/* Using the first letter of the title as a placeholder cover */}
              <span>{book.title.charAt(0)}</span>
            </div>
            <div className="book-info">
              <h2>{book.title}</h2>
              <p className="author">by {book.author}</p>
              <span className="year">{book.year}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;