import React, { Component } from 'react';

import Section from '../../components/Section/Section';
import Spinner from '../../components/UI/Spinner/Spinner';
import { discovery_data } from '../../data';


class Layout extends Component {
    state = {
        sections: null
    }

    componentDidMount() {
        this.setState({sections: discovery_data.sections});
    }

    
    
    render() {
        let sections = <Spinner />
        if (this.state.sections) {
            sections = this.state.sections.map(section => (
                <Section 
                    key={section.title}
                    sectionData={section}
                />
            ))
        }
        return (
            <div className="Layout">
                {sections}
            </div>
        );
    }
}

export default Layout;
