import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "../components/SignIn/SignIn";

test("renders login/register text", () => {
  render(<SignIn />);
  const loginRegisterText = screen.getByText("Login/Register:");
  expect(loginRegisterText).toBeInTheDocument();
});

test("renders register button", () => {
  render(<SignIn />);
  const registerButton = screen.getByText("Register");
  expect(registerButton).toBeInTheDocument();
});

test("switches to login form when login button is clicked", () => {
  render(<SignIn />);
  const loginForm = screen.getAllByPlaceholderText(/Email*/i)[0];
  expect(loginForm).toBeInTheDocument();
});

test("switches to register form when register button is clicked", () => {
  render(<SignIn />);
  const registerButton = screen.getByText("Register");
  fireEvent.click(registerButton);
  const registerForm = screen.getByText("Register Component");
  expect(registerForm).toBeInTheDocument();
});
