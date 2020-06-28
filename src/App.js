import React from 'react';
import './App.css';
import   MenuIcon from '@material-ui/icons/Menu';

import {Button, AppBar, makeStyles, Toolbar, IconButton, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  testButton: {

    backgroundColor:"red"

  }
}));

function App() {

  const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit" className={classes.testButton}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  
}

export default App;
