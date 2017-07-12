import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menus from './menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';

class About extends React.Component {
  render () {
    return (
      <div className="about">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <div>
                <ul>
                    { 
                      this.props.items.map(function(keyName, index) {
                        return <li key={index}>{keyName.name}</li>
                      })
                    }
                </ul>
              </div>
            </MuiThemeProvider>
      </div>
    );
  }
}
 
export default About;