import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders_the_main_greeting_heading', () => {
  render(<App />);
  const greetingHeading = screen.getByText(/Hey!!! Greeting/i);
  expect(greetingHeading).toBeInTheDocument();
});

test('renders_the_h1_element', () => {
  render(<App />);
  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(h1Element).toBeInTheDocument();
});

test('renders_the_h2_element', () => {
  render(<App />);
  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toBeInTheDocument();
});


test('renders_the_name_in_the_h2_element', () => {
  render(<App />);
  const h2Element = screen.getByText(/Welcome,+/i);
  expect(h2Element).toBeInTheDocument();
});








