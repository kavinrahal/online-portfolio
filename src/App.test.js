import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name heading', () => {
  render(<App />);
  const heading = screen.getByText(/KAVIN ABEYSINGHE/i);
  expect(heading).toBeInTheDocument();
});
