import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

function App() {
    return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/users" component={Users} />
                <Route path="/posts" component={Posts} />
            </Switch>
        </Layout>
    </Router>
    );
}

export default App;
