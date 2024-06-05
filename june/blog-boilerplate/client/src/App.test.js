import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("to check if hello world is being printed on the screen", () => {
  render(<App />);

  const ele = screen.getByText(/hello world/i);
  expect(ele).toBeInTheDocument();
});
