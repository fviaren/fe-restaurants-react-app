import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Section from './Section';
import Restaurants from '../Restaurants/Restaurants';

configure({ adapter: new Adapter() });

describe('<Section />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Section sectionData={ 'some data' }/>);
    });
    it('should render <h1 /> when receiving restaurant data', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('should render <Restaurants /> when receiving restaurant data', () => {
        expect(wrapper.find(Restaurants)).toHaveLength(1);
    });
});
