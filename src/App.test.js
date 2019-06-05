import React from 'react';
import App from './App';
import { shallow } from "enzyme";

const enzymeWrapper = shallow(<App />);

describe("<App />", () => {
  test("should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });
  
  test("should contain div with className as App", () => {
    expect(enzymeWrapper.find(".App")).toHaveLength(1);
  });

  test("should contain <img/ > with alt as logo", () => {
    expect(enzymeWrapper.find("img").prop("alt")).toBe("logo");
  });
});
