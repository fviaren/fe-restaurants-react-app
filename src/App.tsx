import React, { FC } from 'react';

import Layout from './components/Layout/Layout'
import './App.css'
import discovery_data from './data.json';

const App: FC = () => {
  return (
    <div className="App">
      <Layout sections={discovery_data.sections}/>
    </div>
  );
}

export default App;
