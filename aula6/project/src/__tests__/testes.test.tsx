import equals from '../components/exemplo';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';
import '@testing-library/jest-dom';


test('equals returns true for equal numbers', () => {
  expect(equals(2, 2)).toBe(true);
});

test('equals returns false for different numbers', () => {
  expect(equals(2, 3)).toBe(false);
});

test('renders Navbar component', () => {
  render(<Navbar /> );
  const homeLink = screen.getByText('Home');
  const aboutLink = screen.getByText('About');
  const contactLink = screen.getByText('Contact');
  
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});