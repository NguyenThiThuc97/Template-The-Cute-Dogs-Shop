import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar/><br/><br/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
