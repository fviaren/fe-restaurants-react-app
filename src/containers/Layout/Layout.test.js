import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import { Layout } from './Layout';
import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<Layout />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });
    it('should resnder <Spinner /> if no restaurants data is received', () => {
        expect(wrapper.find(Spinner)).toHaveLength(3);
    });
    it('should render <Section /> 3 times if sections data is available', () => {
        wrapper.setProps({ sectionData="some data" });
        expect(wrapper.find(Section)).toHaveLength(3);
    });
});