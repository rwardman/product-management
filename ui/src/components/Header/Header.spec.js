import renderer from "react-test-renderer";

import { shallow } from "enzyme";
import Header from "./Header";

describe("When displaying the header component", () => {
  it("should be displayed correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("If a title is supplied", () => {
  it("should display the title", () => {
    const component = shallow(<Header title="Main Heading" />);
    expect(component.find("h1").text()).toEqual("Main Heading");
  });
});
