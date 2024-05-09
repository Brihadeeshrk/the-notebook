import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render the one row per user", () => {
  // render the component, and since we need to pass a list of users in order for this component to work
  //   we'll generate some fake users
  const users = [
    { name: "Sam", email: "test@test.com" },
    { name: "Jane 2", email: "test@test.com" },
  ];
  const { container } = render(<UserList users={users} />);

  // find all the rows in the table
  // const rows = screen.getAllByRole("row");
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");
  //   const table = container.querySelector("table");

  //   eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows per user
  expect(rows).toHaveLength(users.length);
});

test("render the email and name of every user", () => {
  const users = [
    { name: "Sam", email: "test1@test.com" },
    { name: "Jane 2", email: "test2@test.com" },
  ];
  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
