import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import SortBy from "./SortBy";

// const sortBy = () => {};
const options = ["option1", "option2"];

// test("The sort by component should be displayed correctly", () => {
//   const tree = renderer
//     .create(<SortBy options={options} sortBy={jest.fn()} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe("When displaying the sort component", () => {
  it("should be displayed correctly", () => {
    const tree = renderer
      .create(<SortBy options={options} sortBy={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
