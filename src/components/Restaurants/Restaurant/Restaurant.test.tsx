import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Blurhash } from "react-blurhash";

import Restaurant from './Restaurant';

configure({ adapter: new Adapter() });

describe('<Restaurant />', () => {
    let wrapper: ShallowWrapper;
    
    const props = {
        key: 'key',
        data: {
            blurhash: 'UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX',
            launch_date: 'somedate',
            location: [1,2],
            name: 'somename',
            online: true,
            popularity: 1
        }
    }
    
    beforeEach(() => {
        wrapper = shallow(<Restaurant {...props}/>);
    });
    it('should render <Blurhash /> when receiving restaurant data', () => {
        expect(wrapper.find(Blurhash)).toHaveLength(1);
    });
    it('should render <div /> when receiving restaurant data', () => {
        expect(wrapper.find('div [className="Data"]')).toHaveLength(1);
    });
});
