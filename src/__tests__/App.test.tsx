import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Используем мокированный MemoryRouter
jest.mock('react-router-dom', () => ({
  MemoryRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Routes: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Route: ({ element }: { element: React.ReactNode }) => (
    <div>{element}</div>
  ),
  Navigate: ({ to }: { to: string }) => (
    <div>Navigated to {to}</div>
  ),
}));

jest.mock('axios');

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText(/App/i)).toBeInTheDocument();
});