import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#8BD3E6',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin:0,
    marginBottom: theme.spacing(6),
  },
  title: {
    fontFamily: 'cursive', 
    marginRight: theme.spacing(46),
    color: '#3f51b5',
  },
  signInButton: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(38),
  },
  button: {
    margin: theme.spacing(1),
    minWidth: 120,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff', 
    backgroundColor: '#3f51b5', 
    '&:hover': {
      backgroundColor: '#303f9f', 
    },
  },
}));

const Navbar = ({ selectedCuisine, onCuisineChange }) => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
        <Typography variant="h6" className={classes.title}>
        World of Recipes
      </Typography>
      <Button
        className={classes.button}
        variant={selectedCuisine === 'italian' ? 'contained' : 'text'}
        color="primary"
        onClick={() => onCuisineChange('italian')}
      >
        Italian
      </Button>
      <Button
        className={classes.button}
        variant={selectedCuisine === 'mexican' ? 'contained' : 'text'}
        color="primary"
        onClick={() => onCuisineChange('mexican')}
      >
        Mexican
      </Button>
      <Button
        className={classes.button}
        variant={selectedCuisine === 'indian' ? 'contained' : 'text'}
        color="primary"
        onClick={() => onCuisineChange('indian')}
      >
        Indian
      </Button>
      <Button
        className={classes.button}
        variant={selectedCuisine === 'thai' ? 'contained' : 'text'}
        color="primary"
        onClick={() => onCuisineChange('thai')}
      >
        Thai
      </Button>
      <Button className={classes.signInButton}>Sign In</Button>
    </nav>
  );
};

export default Navbar;
