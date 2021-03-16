import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./dashboard";

describe("Dashboard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
