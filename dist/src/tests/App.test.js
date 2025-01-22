import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from '../App';
test('renders the welcome message', () => {
    render(_jsx(App, {}));
    const welcomeMessage = screen.getByText(/Welcome to Earn Brownie!/i);
    expect(welcomeMessage).toBeInTheDocument();
});
