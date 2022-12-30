import './App.css';
import Feed from "./Feed";
import Sidebar from './Sidebar';
import Widgets from "./Widgets";
import React from 'react';


function App() {
  

  return (
    <div className="app">
      
      {/*sidebar*/}
      <Sidebar/>

      {/*Feed*/}
      <Feed></Feed>
      <Widgets/>
    </div>
  );
}

export default App;
