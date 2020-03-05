import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {AuctionCard} from './AuctionCard'
import {fetchingAuction} from '../actions'


function AuctionList(props) {
    console.log(`AuctionList`,props)
    useEffect(()=>{
        props.fetchingAuction()
    }, [props])
    return (
        <div className="auctionListWrapper">
            {props.auctions.map((auction)=>{
                if(Date.parse(auction.deadline)>Date.now()){
                    console.log("auction",auction)
                    return <AuctionCard key={auction.id} auction={auction}/>
                }else{
                    return null;
                }
            })}
            
        </div>
    )
}

export default connect(state=> {
    return{
        auctions: state.crudReducer.auctions
    }
}, {fetchingAuction})(AuctionList)







