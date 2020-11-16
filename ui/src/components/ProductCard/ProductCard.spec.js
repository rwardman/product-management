import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ProductCard from "./ProductCard";

test("The sort by component should be displayed correctly", () => {
  const tree = renderer
    .create(
      <ProductCard
        id="id"
        name="name"
        description="description"
        category="category"
        creationDate="creation date"
        updateDate="update date"
        lastPurchasedDate="last purchased date"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
