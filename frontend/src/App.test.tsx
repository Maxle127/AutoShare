import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('відображає каталог автомобілів', () => {
    window.history.replaceState({}, '', '/');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Оренда автомобілів у Закарпатті',
      }),
    ).toBeInTheDocument();
  });

  it('відображає особистий кабінет за маршрутом /account', () => {
    window.history.replaceState({}, '', '/account');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Особистий кабінет',
      }),
    ).toBeInTheDocument();
  });

  it('відображає сторінку входу за маршрутом /login', () => {
    window.history.replaceState({}, '', '/login');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Вхід до облікового запису',
      }),
    ).toBeInTheDocument();
  });

  it('відображає сторінку автомобіля за маршрутом /cars/1', () => {
    window.history.replaceState({}, '', '/cars/1');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Skoda Octavia',
        level: 1,
      }),
    ).toBeInTheDocument();
  });
});
