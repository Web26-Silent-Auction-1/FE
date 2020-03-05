import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {loginSave} from '../actions'

function Login(props) {

  const [user, setUser] = useState({
    username:"",
    email:"",
  })

  const history = useHistory()

  const handleChanges = f => {
    setUser({...user, [f.target.name] : f.target.value})
  }

  const submitForm = form => {
    form.preventDefault();
    props.loginSave(user)

    setTimeout(function(){
      history.push('/auctions')
    }, 2000)
    
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm}>
        <label htmlFor="name">Username</label>
        <input id="username" type="text" name="username" onChange={handleChanges} required></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" onChange={handleChanges} required></input>  
        <p>Don't have an account? <Link to='/signup'>Click Here</Link></p>         
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default connect(state=>{
return{
  user_id: state.user_id
}
}, {loginSave})(Login);
