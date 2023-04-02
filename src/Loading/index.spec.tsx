import React from "react";
import Loading from ".";
import { render } from "@testing-library/react";

describe("<Loading />", () => {
  it("should check render with snapshot", () => {
    const component = render(<Loading />);

    expect(component).toMatchSnapshot();
  });

  it("should check is it wrapped with <div />", () => {
    const component = render(<Loading />);

    const { container } = component;

    expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; height: 100%; width: 100%; justify-content: center; align-items: center;"
    />
    `);
  });

  it("should check content", () => {
    const content = "Loading...";

    const component = render(<Loading>{content}</Loading>);

    const { container } = component;

    expect(container.textContent).toBe(content);
  });
});
