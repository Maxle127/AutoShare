import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('відображає заголовок стартової сторінки', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Get started', level: 1 }),
    ).toBeInTheDocument();
  });

  it('збільшує лічильник після натискання', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: 'Count is 0' });

    fireEvent.click(button);

    expect(button).toHaveTextContent('Count is 1');
  });
});
