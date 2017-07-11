import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
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

const Menus = () => (
  <div>
    <Paper style={style}>
      <Menu>
          <List style={flexContainer}>
            <ListItem style={listitems}
            primaryText="foo1"
            />
            <ListItem
            primaryText="foo2"
            />
        </List>
      </Menu>
    </Paper>
  </div>
);

export default Menus;