import React, { Component } from 'react';

import Layout from './containers/Layout/Layout'
import './App.css'
import RespContext from './context/resp-context';
import { discovery_data } from './data';

class App extends Component {
  state = {
    sections: null,
    slidesToShow: 0,
    imageSize: [180,138]
  }

  componentDidMount () {
    this.updateSlides()
    this.updateImageSize()
    this.setState({ sections: discovery_data.sections });
    window.addEventListener('resize', this.updateSlides);
    window.addEventListener('resize', this.updateImageSize);
  }

  updateSlides = () => {
    if (window.innerWidth < 800) {
        this.setState({ slidesToShow: 3 })
    } else if (window.innerWidth < 1100){
        this.setState({ slidesToShow: 4 })
    } else {
        this.setState({ slidesToShow: 5 })
    }
  }

  updateImageSize = () => {
    if (window.innerWidth < 600) {
      this.setState({ imageSize: [100, 93] })
    }  else {
      this.setState({ imageSize: [180, 138] })
    }
  }

  render() {
    return (
      <div className="App">
        <RespContext.Provider value={{ 
          slidesToShow: this.state.slidesToShow,
          imageSize: this.state.imageSize}}
        >
          <Layout sections={this.state.sections}/>
        </RespContext.Provider>
      </div>
    );
  }
}

export default App;
