import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on the screen", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await user.click(nameInput);
  await user.keyboard("brihadeesh");

  await user.click(emailInput);
  await user.keyboard("brihadeesh@test.com");

  const button = screen.getByRole("button", { name: /add user/i });

  await user.click(button);

  const name = screen.getByRole("cell", { name: "brihadeesh" });
  const email = screen.getByRole("cell", { name: "brihadeesh@test.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
