import { render, screen } from '@testing-library/react'
import Loader from '../Loader'

test('rating component is working well', () => {
    render(<Loader />)

    const spinnerElement = screen.getByRole('status')
    expect(spinnerElement).toBeInTheDocument()

    const textElement = screen.getByText(/Loading.../i)
    expect(textElement).toBeInTheDocument()
});