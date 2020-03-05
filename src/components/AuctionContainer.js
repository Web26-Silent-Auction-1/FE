import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from '../utils/PrivateRoute'

import Navigation from './Navigation'
// import AuctionPage from './AuctionPage'
import Login from './Login'
import Signup from './Signup'
import SellerDash from './SellerDash'
import BidderDash from './BidderDash'
import AuctionList from './AuctionList'
import CloserLook from './CloserLook'

export const AuctionContainer = () => {

    const token = window.localStorage.getItem('token')
    
    return (
        <div>
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
    )
}
