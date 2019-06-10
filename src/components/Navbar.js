import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'
import '../stylesheets/navbar.css'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white'
  },
  input: {
    display: 'none'
  },
  list: {
    width: 150
  }
}));



export default function Navbar () {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });
  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open})
  }
  
  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}>
      
        <List>
          {['Home', 'About', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
  )
  
  return (
  <div id='nav-container'>
    <Link to='/home'>LOGO</ Link>
    <div id='name' >Nickolas Quinn</div>
    <IconButton onClick={toggleDrawer('right', true)}  >
      <MenuIcon className={classes.button} />
    </IconButton>
    <Drawer  anchor='right' open={state.right} onClose={toggleDrawer('right', false)}>
      {sideList('right')}
    </Drawer>
  </div>
  )
}

