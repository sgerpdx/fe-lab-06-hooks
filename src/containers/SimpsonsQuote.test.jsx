import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const simpsonsServer = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          quote:
            "When I catch you, I'm gonna pull out your eyes and stick 'em down your pants so you can watch me kick the crap outta you, okay? Next I'm gonna use your tongue to paint my boat!",
          character: 'Moe Szyslak',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411',
          characterDirection: 'Right',
        },
      ])
    );
  })
);

describe('Functional Container Component', () => {
  beforeAll(() => simpsonsServer.listen());
  afterAll(() => simpsonsServer.close());

  it('contains the working presentational components', async () => {
    render(<SimpsonsQuote />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    return waitFor(() => {
      screen.getByAltText('Moe Szyslak');
      screen.getByText(
        `When I catch you, I'm gonna pull out your eyes and stick 'em down your pants so you can watch me kick the crap outta you, okay? Next I'm gonna use your tongue to paint my boat!`
      );
    });
  });
});
