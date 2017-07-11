import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menus from './menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Home extends React.Component {
  render () {
    return (
        <div className="home">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <div>
                <Menus></Menus>
                <RaisedButton label="Default" />
              </div>
            </MuiThemeProvider>
        </div>
    );
  }
}
 
export default Home;