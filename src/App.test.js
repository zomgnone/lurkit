import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('App', () => {
  test('renders Lurkit text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Lurkit/i)).toBeInTheDocument();
  });
});
