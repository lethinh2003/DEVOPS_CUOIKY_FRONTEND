/**
 * @jest-environment jsdom
 */
import Title from "@/components/Home/Title";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Introduce", () => {
  it("render a introduce", () => {
    render(<Title />);

    // check if all components are rendered
    expect(screen.getByRole("title")).toBeInTheDocument();
  });
});
