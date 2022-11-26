import { render, screen } from "@testing-library/react";
import { Header } from "components/Header";

describe("<Main />", () => {
  it("should render the header", () => {
    const { container } = render(<Header />);

    expect(screen.getByTestId("header-test")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
