import React, { FC, useState } from 'react';

import Layout from './containers/Layout/Layout'
import './App.css'
import { discovery_data } from './data';

const App: FC = () => {
  
  const [sections, setSections] = useState(discovery_data.sections);

  return (
    <div className="App">
      <Layout sections={sections}/>
    </div>
  );
}

export default App;
