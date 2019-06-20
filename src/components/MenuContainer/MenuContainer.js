import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

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



export default function MenuContainer () {
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
            <ListItem button component={Link} to='/home'>
            <ListItemText primary='Home' />
            </ListItem>
            <ListItem button component={Link} to='/about'>
            <ListItemText primary='About' />
            </ListItem>
            <ListItem button component={Link} to='/contact' >
            <ListItemText primary='Contact' />
            </ListItem>
        </List>
      </div>
  )
  
  return (
    <div id='menu-btn-container'>
      <IconButton onClick={toggleDrawer('right', true)}  >
        <MenuIcon className={classes.button} />
      </IconButton>
      <Drawer  anchor='right' open={state.right} onClose={toggleDrawer('right', false)}>
      {sideList('right')}
      </Drawer>
    </div>
  )
}

