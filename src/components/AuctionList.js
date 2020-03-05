import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {AuctionCard} from './AuctionCard'
import {fetchingAuction} from '../actions'

function AuctionList(props) {
    console.log(`AuctionList props console logging`,props)

useEffect(()=>{
    props.fetchingAuction()
}, [])

    return (
        <div>
            {props.auctions.map((auction)=>{
                return <AuctionCard key={auction.id} auction={auction}/>
            })}
            
        </div>
    )
}

export default connect(state=> {
    return{
        auctions: state.crudReducer.auctions
    }
}, {fetchingAuction})(AuctionList)
