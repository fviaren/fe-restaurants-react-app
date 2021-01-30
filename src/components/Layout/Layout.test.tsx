import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';
import Section from '../Section/Section';
import Spinner from '../UI/Spinner/Spinner';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout sections={null}/>);
    });
    it('should resnder <Spinner /> if no restaurants data is received', () => {
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });
    it('should render <Section /> for each section in the data received', () => {
        const sectionsDataArray = [{ title: 'One' }, { title: '2' }]
        wrapper.setProps({ sections: sectionsDataArray });
        expect(wrapper.find(Section)).toHaveLength(sectionsDataArray.length);
    });
});