import React from "react";
import Loading from ".";
import { render } from "@testing-library/react";

describe("<Loading />", () => {
  it("should check render with snapshot", () => {
    const component = render(<Loading />);

    expect(component).toMatchSnapshot();
  });

  it.skip("should check is it wrapped with <div />", () => {
    const component = render(<Loading />);

    // eslint-disable-next-line no-unused-vars
    const { container } = component;

    // expect(container.firstChild.tagName).toBe("DIV");
  });

  it("should check content", () => {
    const content = "Loading...";

    const component = render(<Loading>{content}</Loading>);

    const { container } = component;

    expect(container.textContent).toBe(content);
  });
});
