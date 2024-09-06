import React from 'react';
import './App.css'

import GroupedBarchart from './component/groupedBarchart';
import Sidebar from './component/sidebar';
import Linechart from './component/linechart';

function App() {
  return (
    <div className='flex-container'>
      <Sidebar />
      <div className='chart-container'>
        <GroupedBarchart />
        <hr />
        <Linechart />
      </div>
    </div>
  );
}

export default App;
