import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

test('renders MyComponent correctly', () => {
  const { getByText } = render(<Form/>);
  expect(getByText('Hello, world!')).toBeInTheDocument();
});
