import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostCreate from "./PostCreate";
// import { createServer } from "./tests/server";

// createServer([
//   {
//     path: "/posts",
//     method: "post",
//     res: (req, res, ctx) => {
//       return {
//         title: "hello",
//       };
//     },
//   },
// ]);

it("shows an input field and a button on the screen", () => {
  render(<PostCreate />);

  const inputField = screen.getByLabelText(/title/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(inputField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

describe("when i enter text inside the input field", () => {
  it("and click on the button, the input field should become empty again", () => {
    render(<PostCreate />);

    const inputField = screen.getByLabelText(/title/i);
    fireEvent.change(inputField, { target: { value: "hello" } });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(inputField).toHaveValue("");
  });
});
