import renderer from "react-test-renderer";
import FilterPanel from "./FilterPanel";

const categories = [
  { id: "id1", name: "name1" },
  { id: "id2", name: "name2" },
];

describe("When displaying the filter panel component", () => {
  it("should be displayed correctly", () => {
    const tree = renderer
      .create(<FilterPanel categories={categories} filterOn={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
