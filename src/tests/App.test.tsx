import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders the welcome message', () => {
  render(<App />)
  const welcomeMessage = screen.getByText(/Welcome to Earn Brownie!/i)
  expect(welcomeMessage).toBeInTheDocument()
})
