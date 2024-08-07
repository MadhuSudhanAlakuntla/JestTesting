import {screen,render,within} from "@testing-library/react"
import UserList from "./UserList"

test("check the list",() => {
    const users = [
        {name: "John", email: "john@gmail.com"},
        {name: "Alice", email:  "alice@gmail.com"},
        {name: "Bob", email:    "bob@gmail.com"},
    ]
    const {container} = render(<UserList users={users}/>)
    
    // screen.logTestingPlaygroundURL(); //for testing role and all
    // const lists = within(screen.getByTestId("users")).getAllByRole("row"); // alternate way
    // eslint-disable-next-line
    const lists = container.querySelectorAll("tbody tr");

    expect(lists).toHaveLength(3);
})

test("check user is present",() => {
    const users = [
        {name: "John", email: "john@gmail.com"},
        {name: "Alice", email:  "alice@gmail.com"},
        {name: "Bob", email:    "bob@gmail.com"},
    ]
    const {container} = render(<UserList users={users}/>)
    
    // screen.logTestingPlaygroundURL();
    for(const user of users){
        const userJohn = screen.getByRole("cell",{name:user.name});
        expect(userJohn).toBeInTheDocument();
    }
})