import { render, screen } from '@testing-library/react';
import Banner from '../Banner';
import { useDispatch } from 'react-redux'
import { listTopProducts } from '../../actions/productActions'
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

  // const img = screen.getAllByRole("img");
  // expect(img.length).toBe(3);
  // const linkElements = screen.getAllByRole("link");
  // expect(linkElements.length).toBe(3);
});