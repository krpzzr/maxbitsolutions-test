import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from 'components/Loading';

describe('Loading Component', () => {
  it('should render the loading text', () => {
    render(<Loading />);

    // Проверяем, что текст "Loading..." отображается
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});