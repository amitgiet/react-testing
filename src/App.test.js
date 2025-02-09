import { render, screen } from "@testing-library/react";
import App from "./App";

// test("Test first case react", () => {
//   render(<App />);
//   const text = screen.getByText(/First React Test Casses/i); //i for ignor upper or lower case
//   const title = screen.getByTitle("ai generated");
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });

test("testing input box", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlaceHolder = screen.getByPlaceholderText("hey input box");

  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userid");
  // expect(checkInput).toHaveAttribute("value", "bharat");
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(checkInput).toBeInTheDocument();
});
