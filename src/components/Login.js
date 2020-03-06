import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {loginSave} from '../actions'

// Material ui

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function Login(props) {

  const [user, setUser] = useState({
    username:"",
    email:"",
  })
  const [loading, setLoader] = useState(false)

  const history = useHistory()

  const handleChanges = f => {
    setUser({...user, [f.target.name] : f.target.value})
  }

  const submitForm = form => {
    setLoader(true)
    form.preventDefault();
    props.loginSave(user)

    setTimeout(function(){
      history.push('/auctions')
      setLoader(false)
    }, 3000)
    
  }

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="form-wrapper">
      {loading ? (<CircularProgress />) : (<form onSubmit={submitForm}>
        <label htmlFor="name">Username</label>
        <input id="username" type="text" name="username" onChange={handleChanges} required></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" onChange={handleChanges} required></input>  
        <p>Don't have an account? <Link to='/signup'>Click Here</Link></p>         
        <button type="submit">Log in</button>
      </form>) }
    </div>
  );
}

export default connect(state=>{
return{
  user_id: state.user_id
}
}, {loginSave})(Login);
