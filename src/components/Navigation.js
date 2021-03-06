import React from "react";
import { Link, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = (props) => {
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  const signOut = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  return token ? (
    <div className="NavBar">
      <a href="https://silentauction-app.netlify.com/">Home</a>
      <Link to="/auctions">Auctions</Link>
      {props.user_type === "seller" ? (
        <Link to={`/dashboard/${props.user_type}/${props.user_id}`}>
          S Dashboard
        </Link>
      ) : (
        <Link to={`/dashboard/${props.user_type}/${props.id}`}>
          B Dashboard
        </Link>
      )}
      <button onClick={signOut}>Sign out</button>
    </div>
  ) : null;
};

export default connect((state) => {
  return {
    user_id: state.crudReducer.user_id,
    user_type: state.crudReducer.user_type,
  };
}, {})(Navigation);
