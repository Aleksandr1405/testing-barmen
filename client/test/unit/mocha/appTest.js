import App from "../../../src/App";
import Header from "../../../src/components/Header";

import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import {Link} from "react-router-dom";

configure({ adapter: new Adapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;

describe('app test', () => {
    beforeEach(() =>{
        global.wrapper = shallow(<App />)
        global.mntWrapper = mount(<App />)
    })
    it('renders header', () => {
        expect(wrapper.find(Header)).to.have.length(1);
        expect(mntWrapper.find(Link)).to.have.length(2);
        expect(mntWrapper.find('#App-header-button')).to.have.length(0);
    })
})