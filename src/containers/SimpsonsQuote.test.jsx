import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
//import userEvent from '@testing-library/user-event';

describe('Functional Container Component', () => {
  it('contains the working presentational components', async () => {
    render(<SimpsonsQuote />);
  });
});