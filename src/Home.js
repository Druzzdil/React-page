import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menus from './menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import _ from 'lodash';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
}

  render () {
    return (
        <div className="home">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <div>
                <h1>Umarłem</h1>
              </div>
            </MuiThemeProvider>
        </div>
    );
  }
}
 
export default Home;