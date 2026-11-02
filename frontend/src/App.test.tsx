import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('відображає заголовок особистого кабінету', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Особистий кабінет' }),
    ).toBeInTheDocument();
  });

  it('відображає кнопки керування заявкою', () => {
    render(<App />);

    expect(
      screen.getByRole('button', { name: 'Підтвердити' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Відхилити' }),
    ).toBeInTheDocument();
  });
});
