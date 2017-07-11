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
      let sorte = res.data.results.reverse();
      this.setState({episodes: sorte});
    }, (err)=>{
        console.log(err, 'an error occured');
    });
};

// soro(){
//   sort(function(a, b) {
//     var textA = a.DepartmentName.toUpperCase();
//     var textB = b.DepartmentName.toUpperCase();
//     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
// }


  render(){ 
      return (
        <div className="container">
          <h1>this is fine like hell</h1>
          <Home items={this.state.episodes}></Home>
        </div>
      );
    }
  }


