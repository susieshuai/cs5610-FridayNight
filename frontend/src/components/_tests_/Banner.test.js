import { render, screen } from '@testing-library/react';
import Banner from '../Banner';

import store from "../../store";
import { Provider } from "react-redux";


test('Banner images', () => {

  render(
    <Provider store={store}>
      <Banner />
    </Provider>
  );

  const img = screen.getAllByRole("img");
  expect(img.length).toBe(3);
  const linkElements = screen.getAllByRole("link");
  expect(linkElements.length).toBe(3);
});