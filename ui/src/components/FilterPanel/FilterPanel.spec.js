import renderer from "react-test-renderer";
import FilterPanel from "./FilterPanel";

const categories = [
  { id: "id1", name: "name1" },
  { id: "id2", name: "name2" },
];

const activeFilters = ["3"];

describe("When displaying the filter panel component", () => {
  it("should be displayed correctly", () => {
    const tree = renderer
      .create(
        <FilterPanel
          categories={categories}
          filterOn={jest.fn()}
          activeFilters={activeFilters}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
