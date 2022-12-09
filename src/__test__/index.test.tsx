import { render, screen } from "@testing-library/react";

import Home from "@/pages";
import NotFoundPage from "@/pages/404";

import "@testing-library/jest-dom";

jest.mock("react-qrcode-logo", () => ({
  QRCode: jest.fn(),
}));

test("Renders Home Page Successfully", () => {
  render(<Home />);
  const heading = screen.getByText("QR Generator");
  expect(heading).toBeInTheDocument();
});

test("Renders 404 page successfully!", () => {
  render(<NotFoundPage />);
  const heading = screen.getByText("Page Not Found");
  expect(heading).toBeInTheDocument();
});
