import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Route path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
