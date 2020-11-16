import renderer from "react-test-renderer";
import Header from "./Header";

describe("When displaying the header component", () => {
  it("should be displayed correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
