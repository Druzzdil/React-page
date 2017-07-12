import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menus from './menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const styles = {
  form: {
    backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const data = [
    {name: 'igor', email: 'rr@mail.com'},
    {name: 'igortt', email: 'rr@maitl.com'}
]
const Contact = props => {
  return (  
    <div><h1>{props.name}</h1></div>
  );
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
}

handleSubmitForm(){
  axios.post('/http://swapi.co/api/planets/', {
    name: 'event.target.value'
  })
  .then(function (response) {
    console.log(response.status(200, 'request successfull'));
  })
  .catch(function (error) {
    console.log(error);
  });
}
  
  render () {
    return (
      <div className="about">
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="form" style={styles.form}>
        <br/>
          {
            data.map(info=>{
            return <Contact name={info.name} />
          })
        }
        <br/><br/><br/><br/>
          <div>
            <form onSubmit={this.handleSubmit} className="formid">
              <TextField
              hintText="Hint Text"
              value={this.state.value}
              onChange={this.handleChange}
            /><br />
            <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}
 
export default Form;