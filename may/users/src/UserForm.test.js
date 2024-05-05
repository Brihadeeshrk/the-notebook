import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("check for 2 inputs and a button", () => {
  // render the component
  render(<UserForm />);

  //   check if the inputs and the button are being rendered
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertion: to make sure that the component is behaving as expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
