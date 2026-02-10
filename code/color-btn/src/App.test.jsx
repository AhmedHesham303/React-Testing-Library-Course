import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("button click flow", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });
  const checkbox = screen.getByRole("checkbox");

  // expect(button).toHaveClass("red");
  // fireEvent.click(checkbox);
  // expect(button).toHaveClass("gray");
  // fireEvent.click(checkbox);
  // expect(button).toHaveClass("red");
  fireEvent.click(button);
  // expect(button).toHaveTextContent("Change to red");

  // expect(button).toHaveClass("blue");
  fireEvent.click(checkbox);
  expect(button).toHaveClass("gray");
  fireEvent.click(checkbox);
  expect(button).toHaveClass("blue");
});

test("checkbox click flow", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button", { name: /blue/i });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveClass("gray");

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveClass("red");
});
