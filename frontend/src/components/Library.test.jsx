import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Library from './Library';

const mockBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
    { id: 3, title: "Dune", author: "Frank Herbert", year: 1965 }
];

describe('Library React Component', () => {
    it('renders all books when no filter is applied', () => {
        render(<Library initialBooks={mockBooks} />);
        
        expect(screen.getByText(/The Great Gatsby/i)).toBeInTheDocument();
        expect(screen.getByText(/Dune/i)).toBeInTheDocument();
    });

    it('filters the list correctly when a user types a year', () => {
        render(<Library initialBooks={mockBooks} />);
        
        const input = screen.getByTestId('year-input');
        fireEvent.change(input, { target: { value: '1950' } });

        expect(screen.getByText(/Dune/i)).toBeInTheDocument();
        expect(screen.queryByText(/1984/i)).not.toBeInTheDocument();
    });

    it('displays a fallback message when no books match the filter', () => {
        render(<Library initialBooks={mockBooks} />);
        const input = screen.getByTestId('year-input');

        fireEvent.change(input, { target: { value: '2020' } });

        expect(screen.getByText("No books found.")).toBeInTheDocument();
    });
});