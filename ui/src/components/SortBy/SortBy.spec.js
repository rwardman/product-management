import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import SortBy from "./SortBy";

const options = ["option1", "option2"];

describe("When displaying the sort component", () => {
  it("should be displayed correctly", () => {
    const tree = renderer
      .create(<SortBy options={options} sortBy={jest.fn()} chosenOption="3" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
