import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Blurhash } from "react-blurhash";

import Restaurant from './Restaurant';
//import respContext from '../../../context/resp-context'

configure({ adapter: new Adapter() });

describe('<Restaurant />', () => {
    const respContext = {
        slidesToShow: 3,
        imageSize: [180,138]
    }
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Restaurant />, {respContext} );
    });
    it('should render <Blurhash /> when receiving restaurant data', () => {
        const restData = { 
            blurhash: 'something',
            name: 'something',
            online: true,
            popularity: 1
        }
        
        wrapper.setProps({ data: restData });
        expect(wrapper.find(Blurhash)).toHaveLength(1);
    });
    // it('should render <div /> when receiving restaurant data', () => {
    //     expect(wrapper.find('div [class="Data"]')).toHaveLength(1);
    // });
})

// describe('<Restaurant />', () => {
//     let wrapper;
//     beforeEach(() => {
//         wrapper = shallow(<Restaurant />);
//     });
//     it('should render <Blurhash /> when receiving restaurant data', () => {
//         const restData = { 
//             blurhash: 'UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX',
//             launch_date: '2020-04-20',
//             location: [
//                 24.938082,
//                 60.17626
//             ],
//             name: 'Sea Chain',
//             online: true,
//             popularity: 0.956990414084132
//         }
//         wrapper.setProps({ data: restData });
//         expect(wrapper.find(Blurhash)).toHaveLength(1);
//     });
// it('should render <div /> when receiving restaurant data', () => {
//     expect(wrapper.find('div [class="Data"]')).toHaveLength(1);
// });
// }))
