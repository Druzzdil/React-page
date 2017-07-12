import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

const style = {
  display: 'inline-block',
  margin: '0',
  width: '100%'
};
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  width: '100%',
};
const listitems = {
 display: 'flex',
 flexDirection: 'row',
 textAlign: 'right',
 float: 'right'
}
const noSpace = {
  margin: '0',
  padding: '0'
}

const Menus = () => (
  <div style={noSpace}>
    <Paper style={style}>
      <Menu style={noSpace}>
          <List style={flexContainer}>
            <ListItem style={listitems}
            primaryText="About" containerElement={<Link to="/About"/>}
            />
            <ListItem
            primaryText="Contact Us" containerElement={<Link to="/Form"/>}
            />
            <ListItem
            primaryText="HomePage" containerElement={<Link to="/Home"/>}
            />
        </List>
      </Menu>
    </Paper>
  </div>
);

export default Menus;