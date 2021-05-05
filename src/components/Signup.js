import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { signupSave } from "../actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  usrType: {
    color: "slateblue",
  },
});

function Signup(props) {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: "",
    password: "",
    user_type: "",
  });

  const history = useHistory();

  const handleChanges = (f) => {
    setUser({ ...user, [f.target.name]: f.target.value });
  };

  const submitForm = (form) => {
    form.preventDefault();
    props.signupSave(user);
    history.push("/login");
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm}>
        <label htmlFor="name">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={handleChanges}
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChanges}
          required
        ></input>
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.usrType}>
            User type
          </FormLabel>
          <RadioGroup
            aria-label="user_type"
            className="radio-options-wrapper"
            name="user_type"
            value={user.user_type}
            onChange={handleChanges}
            required
          >
            <FormControlLabel
              value="seller"
              control={<Radio color="primary" />}
              label="Seller"
            />
            <FormControlLabel
              value="bidder"
              control={<Radio color="primary" />}
              label="Bidder"
            />
          </RadioGroup>
        </FormControl>
        <p>
          Already have an account? <Link to="/login">Click Here</Link>
        </p>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default connect(
  (state) => {
    return {};
  },
  { signupSave }
)(Signup);
