import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menus from './menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';


class Home extends React.Component {
  render () {
    return (
        <div className="home">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <div>
                <Menus></Menus>
                    <ul>
                        {this.props.items.map(function(keyName, keyIndex) {
                            return <li key={keyIndex}>{keyName.name}</li>
                            })
                        }
                    </ul>
              </div>
            </MuiThemeProvider>
        </div>
    );
  }
}
 
export default Home;