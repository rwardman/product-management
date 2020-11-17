import renderer from "react-test-renderer";
import NoResults from "./NoResults";

describe("When displaying the no results component", () => {
  it("should be displayed correctly", () => {
    const tree = renderer.create(<NoResults />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
