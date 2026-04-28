import { useState } from 'react';

export default function Library({ initialBooks = [] }) {
    const [filterYear, setFilterYear] = useState('');

    const filteredBooks = filterYear
        ? initialBooks.filter(book => book.year >= parseInt(filterYear, 10))
        : initialBooks;

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Library Directory</h2>
            
            <input
                type="number"
                placeholder="Filter by minimum year..."
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                data-testid="year-input"
                style={{ marginBottom: '15px', padding: '5px' }}
            />

            <ul data-testid="book-list">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> by {book.author} ({book.year})
                        </li>
                    ))
                ) : (
                    <li>No books found.</li>
                )}
            </ul>
        </div>
    );
}