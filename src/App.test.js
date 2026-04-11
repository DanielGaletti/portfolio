import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /daniel galetti/i })).toBeInTheDocument();
});
