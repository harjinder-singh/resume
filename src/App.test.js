import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio sections", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /ai software engineer/i,
    })
  ).toBeInTheDocument();
  ["Skills & Technologies", "Work Experience", "Education"].forEach((title) =>
    expect(screen.getByRole("heading", { name: title })).toBeInTheDocument()
  );
});
