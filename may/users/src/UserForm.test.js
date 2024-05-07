import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("check for 2 inputs and a button", () => {
  // render the component
  render(<UserForm />);

  //   check if the inputs and the button are being rendered
  const inputs = screen.getAllByRole("textbox");
  //    you must use getByRole when you only have 1 element that matches the query, otherwise you'll get an error
  const button = screen.getByRole("button");

  // assertion: to make sure that the component is behaving as expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

// typing into the input fields and then submitting the form should trigger the onUserAdd fn

test("should call onUserAdd when the form is submitted", async () => {
  const mock = jest.fn();
  // try to render the component
  render(<UserForm onUserAdd={mock} />);

  // find the 2 inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("test name");

  // simulate typing in a email
  await user.click(emailInput);
  await user.keyboard("test@test.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  await user.click(button);

  // assertion to make sure onUserAdd is called with email and name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "test name",
    email: "test@test.com",
  });
});
