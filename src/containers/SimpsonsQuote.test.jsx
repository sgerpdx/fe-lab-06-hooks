import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import userEvent from '@testing-library/user-event';

describe('Functional Container Component', () => {
  it('contains the working presentational components', async () => {
    render(<SimpsonsQuote />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    //const img = screen.getByRole('image', { name: 'Character Picture' });

    //const text = screen.getByAltText('Character Quote');
  });
});
