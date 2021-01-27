import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Blurhash } from "react-blurhash";

import Restaurant from './Restaurant';

configure({ adapter: new Adapter() });

describe('<Restaurant />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Restaurant data={ 'some data' }/>);
    });
    it('should render <Blurhash /> when receiving restaurant data', () => {
        expect(wrapper.find(Blurhash)).toHaveLength(1);
    });
    it('should render <div /> when receiving restaurant data', () => {
        expect(wrapper.find('div [class="Data"]')).toHaveLength(1);
    });
});