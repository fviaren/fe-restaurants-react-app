import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Section from './Section';
import Restaurants from '../Restaurants/Restaurants';

configure({ adapter: new Adapter() });

describe('<Section />', () => {
    let wrapper: ShallowWrapper;
    const props  = {
        key: 'key',
        sectionData: { title: 'One', restaurants: [] } 
    }
    beforeEach(() => {
        wrapper = shallow(<Section {...props}/>);
    });
    it('should render <h1 /> when receiving restaurant data with title equal to section.title', () => {
        expect(wrapper.find('h1').text()).toEqual(props.sectionData.title);
    });
    it('should render <Restaurants /> when receiving restaurant data', () => {
        expect(wrapper.find(Restaurants)).toHaveLength(1);
    });
});