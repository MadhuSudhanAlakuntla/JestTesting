import UserForm from "./UserForm";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Test to check if the form elements are rendered correctly
test('checks name, email and submit button are present', () => {
    render(<UserForm />);
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    expect(inputs.length).toBe(2);
    expect(button).toBeInTheDocument();
});

// Test to check if the onUserAdd function is called with correct arguments after form submission
test("checks the onUserAdd function is called after submission", async () => {
    const mock = jest.fn();
    render(<UserForm onUserAdd={mock}/>);
    
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    
    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "johndoe@example.com");
    
    const button = screen.getByRole("button");
    await userEvent.click(button);
    
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
        name: "John Doe",
        email: "johndoe@example.com"
    });
});
