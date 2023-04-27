import React from 'react';
import './App.css';
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb>
        <Breadcrumb.Item>test</Breadcrumb.Item>
        <Breadcrumb.Item> \test</Breadcrumb.Item>
        <Breadcrumb.Item active style={{color: "green",border: 'solid 2px gray',borderRadius:'50%',paddingLeft:'10px' , backgroundColor: '#fff'}}>test</Breadcrumb.Item>
        </Breadcrumb>
        <alert variant="success">This is a button</alert>
        <button>Test</button>
      </header>
    </div>
  );
}

export default App;
