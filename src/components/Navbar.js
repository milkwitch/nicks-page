import React from 'react'
import '../stylesheets/navbar.css'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));


export default function Navbar () {
  
  const classes = useStyles();
  
  return (
  <div id='nav-container'>
    <div id='logo'>LOGO</div>
    <IconButton classes={classes.button}>
      <MenuIcon />
    </IconButton>
  </div>
  )
}

