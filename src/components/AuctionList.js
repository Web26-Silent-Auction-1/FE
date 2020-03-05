import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {AuctionCard} from './AuctionCard'
import {fetchingAuction} from '../actions'

function AuctionList(props) {

useEffect(()=>{
    props.fetchingAuction()
}, [props.fetchAgain, props.isDeleting, props.isUpdating])

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
        auctions: state.crudReducer.auctions,
        isDeleting: state.crudReducer.isDeleting,
        isUpdating: state.crudReducer.isUpdating
    }
}, {fetchingAuction})(AuctionList)
