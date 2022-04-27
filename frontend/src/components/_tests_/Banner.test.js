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

  const leftButton = screen.getByRole("button", { name: "Previous" })
  expect(leftButton).toBeEnabled();
  const rightButton = screen.getByRole("button", { name: "Next" })
  expect(rightButton).toBeEnabled();
});