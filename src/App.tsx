import React, { FC } from 'react';

import Layout from './components/Layout/Layout'
import discovery_data from './data.json';
import './App.css'

const App: FC = () => {
  return (
    <div className="App">
      <Layout sections={discovery_data.sections}/>
    </div>
  );
}

export default App;