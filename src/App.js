import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

// Components
import {AuctionContainer} from './components/AuctionContainer'

import Navigation from './components/Navigation'
// import AuctionPage from './AuctionPage'
import Login from './components/Login'
import Signup from './components/Signup'
import SellerDash from './components/SellerDash'
import BidderDash from './components/BidderDash'
import AuctionList from './components/AuctionList'
import CloserLook from './components/CloserLook'

function App(props) {
  console.log(`in app.js`,props)
  return (
    <div className="App">
      <p>App</p>
      <Navigation/>
            <Switch>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/login' component={Login}/>
                <PrivateRoute exact path='/auctions' component={AuctionList}/>
                <PrivateRoute exact path='/dashboard/seller/:id' component={SellerDash}/>
                <PrivateRoute exact path='/dashboard/bidder/:id' component={BidderDash}/>
                <PrivateRoute exact path='/closerlook/:id' component={CloserLook}/>
            </Switch>
    </div>
  );
}

export default connect(state=>{
  return{}
},{})(App);