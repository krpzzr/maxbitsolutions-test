import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import NotFound from 'components/NotFound';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('NotFound Component', () => {
  it('renders the component correctly', () => {
    render(<NotFound />);

    const image = screen.getByAltText('404 Page');
    expect(image).toBeInTheDocument();

    const heading = screen.getByText(/Oops! Looks like you're lost.../i);
    expect(heading).toBeInTheDocument();

    const button = screen.getByText(/Take Me Home/i);
    expect(button).toBeInTheDocument();
  });

  it('navigates to home page when button is clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<NotFound />);

    const button = screen.getByText(/Take Me Home/i);
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});