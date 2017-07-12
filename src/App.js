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
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

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
      let sorte = res.data.results;
      sorte.sort(function(a, b) {
        let textA = a.name;
        let textB = b.name;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    this.setState({episodes: sorte});
    }, (err)=>{
        console.log(err, 'an error occured');
    });
};

  render(){ 
      return (
        <div className="container">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <h1>this is fine like hell</h1>
            <Menus></Menus>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
            <HashRouter>
              <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </div>
            </HashRouter>
            <About items={this.state.episodes}></About>
          </div>
          </MuiThemeProvider>
        </div>
      );
    }
  }


