import React, { Component } from 'react';
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import './App.css';


class App extends Component {
  render() {
    return  (
      <MuithemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuithemeProvider>
    );
  }
}

export default App;
