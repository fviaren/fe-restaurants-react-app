import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Layout from './Layout';
import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner/Spinner.txs';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout />);
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