import React, { Component } from 'react';

import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Layout.css';
import { discovery_data } from '../../data';


class Layout extends Component {
    state = {
        sections: null,
        slidesToShow: 0
    }

    updateSlides = () => {
        if(window.innerWidth < 800) {
            this.setState({ slidesToShow: 3 })
        } else if (window.innerWidth < 1100){
            this.setState({ slidesToShow: 4 })
        } else {
            this.setState({ slidesToShow: 5 })
        }
    }
    

    componentDidMount () {
        this.updateSlides()
        this.setState({ sections: discovery_data.sections });
        window.addEventListener('resize', this.updateSlides);
    }
    
    render () {
        let sections = <Spinner />
        if (this.state.sections) {
            sections = this.state.sections.map(section => (
                <Section 
                    key={section.title}
                    sectionData={section}
                    slidesToShow={this.state.slidesToShow}
                />
            ))
        }
        return (
            <div className="Layout" >
                {sections}
                <a className="Credit" href="https://www.freepik.com/vectors/food">Food vector created by bimbimkha - www.freepik.com</a>
            </div>
        );
    }
}

export default Layout;
