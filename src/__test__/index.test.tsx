import { render, screen } from "@testing-library/react";

import NotFoundPage from "@/pages/404";
import Components from "@/pages/components";

import Home from "../pages/index";

import "@testing-library/jest-dom";

describe("Render Page Normally", () => {
  it("Renders Home Page Successfully", () => {
    render(<Home />);
    const heading = screen.getByText("Hello World!");
    expect(heading).toBeInTheDocument();
  });

  it("Renders Components Page Successfully", () => {
    render(<Components />);
    const heading = screen.getByText("Reusable Components");
    expect(heading).toBeInTheDocument();
  });
  it("Renders 404 page successfully!", () => {
    render(<NotFoundPage />);
    const heading = screen.getByText("Page Not Found");
    expect(heading).toBeInTheDocument();
  });
});
