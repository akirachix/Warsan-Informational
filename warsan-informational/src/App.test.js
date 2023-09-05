
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('app-component'); // Add a data-testid to your component
  expect(appComponent).toBeInTheDocument();
});
