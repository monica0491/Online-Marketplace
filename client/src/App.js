import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';

function App() {
  return (
    <Router>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
          <Link to="/">Best Buy</Link>
        </div>
        <div className="header-links">
            <a href="home.html">Home</a>
            <br/>
            <a href="logout.html">Sign In</a>
        </div>
    </header>
    <main className="main">
        <div className="content">
          <Route path="/" exact={true} component={HomeScreen}></Route> 
          <Route path="/products/:id" component={ProductScreen}></Route>
            
        </div>
    </main>
    <footer className="footer">
        All rights reserved
    </footer>
  </div>
</Router>
  );
}

export default App;
