import React from "react";
import { shallow } from "enzyme";
import form from "./form";
describe("Login component tests", () => {
  const wrapper = shallow(<Login />);

  it("should have input for email and password", () => {
    expect(wrapper.find("input#email")).toHaveLength(0);
    expect(wrapper.find("input#password")).toHaveLength(0);
  });
});
