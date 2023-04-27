import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import "./assets/scss/app.scss";
import Dashboard from '../pages/Dashboard';
import{BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import {fas} from '@fontawesome/free=solid-svg-icons'
import{library} from '@fortawesome/fontawesome-svg-core'

function App() {
  library.add(fas)
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      {/* stiliams */}
      <div className="main-content">
        <div className="page-content">
          <Dashboard />
        </div>
      </div>
    </Router>
    </>
  );
}

export default App
