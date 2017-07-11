import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menus from './menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import _ from 'lodash';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    // this.sort = this.sort.bind(this);
}

  render () {
    return (
        <div className="home">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <div>
                <Menus></Menus>
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
 
export default Home;