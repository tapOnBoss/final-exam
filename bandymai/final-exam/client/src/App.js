import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Header from './components/layout/Header';
import Contact from './pages/Contact';

const App = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
}

return (
    <Router>
        <div className="app-container">
            <Header />
            <Navbar />
            <main>
                <button className="toggle-sidebar" onClick={toggleSidebar}>Toggle Sidebar</button>
                <Sidebar isOpen={isSidebarOpen} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </main>
        </div>
    </Router>
    );
}

export default App;
