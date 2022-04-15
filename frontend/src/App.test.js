import React from 'react';
import { render } from '@testing-library/react';

// import App from './App';
import Ad from './components/Ad';

describe('Ad', () => {
  test('renders Ad component', () => {
    render(<Ad />);
  });
});