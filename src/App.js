import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import About from './about';
import Home from './Home';
import './App.css';
import axios from 'axios';
import Menus from './menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


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
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
 
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
      );
    }
  }


