import React, { FC } from 'react';

import Layout from './containers/Layout/Layout'
import './App.css'
import { discovery_data } from './data';

const App: FC = () => {
  return (
    <div className="App">
      <Layout sections={discovery_data.sections}/>
    </div>
  );
}

export default App;
