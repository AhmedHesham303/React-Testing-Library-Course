// render creates simulated dom for testing, screen is used to query the dom, fireEvent is used to simulate user events
import { screen, render } from "@testing-library/react";
import App from "./App";
// test takes a description and a callback function, the callback function contains the actual test code

test.skip("demo example", () => {
  // skiped test will not run, useful for debugging (here we are skipping only to show the a code example of a test)
  render(<App />);
  // getByRole is used to query the dom for an element with a specific role, in this case we are looking for a button with the name "Change to blue"
  const button = screen.getByRole("button", { name: /blue/i });
  // expect is used to make assertions about the state of the dom, in this case we are checking if the button is in the document
  expect(button).toBeInTheDocument();
});
