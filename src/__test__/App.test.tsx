import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

describe('Root App', () => {
  test('renders main app', () => {
    const { container } = render(<App />);

    expect(container).toBe(container);
  });
});
