import {shallow} from "enzyme/build";
import toJson from "enzyme-to-json";
import React from "react";
import {Switch} from "../lib/switch";

describe('@xzchameleon/switch', () => {
    it('should render without issue', () => {
        const component = shallow(<Switch/>);
        expect(component.length).toBe(1);
        expect(toJson(component)).toMatchSnapshot();
    });
});