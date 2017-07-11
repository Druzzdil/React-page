import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import About from './about';
import Home from './Home';
import './App.css';
import axios from 'axios';
import Menus from './menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

injectTapEventPlugin();


export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        episodes: []
      }
      this.init = this.init.bind(this);
      
  }

componentDidMount() {
  this.init();
}

async init(){
    axios.get('http://swapi.co/api/planets/').then((res) =>{
      this.setState({episodes: res.data.results});
  });
};

  render(){ 

      return (

        <div className="container">
          <h1>this is fine like hell</h1>
          <Home items={this.state.episodes}></Home>
        </div>

      );
    }
  }


